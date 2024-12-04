import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { grados_sancion, regular, sanciones } from '@prisma/client';
import { responsePrestamoRegular } from './dto/responde.dto.js';
import { FinPrestamoDto } from './dto/fin-prestamo-dto.js';
import { TiempoSancionDto } from './dto/tiempo-sancion.dto.js';
import { calcularFechaSemestral } from '../auth/lib/functions.js';
import { EstudiantesService } from '../estudiantes/estudiantes.service.js';

@Injectable()
export class PrestamoRegularService {

  constructor(
    private readonly databaseService : DatabaseService,
    private readonly _alumnoService: EstudiantesService,
  ){}

  async create(createPrestamoRegular: CreatePrestamoRegularDto) : Promise<responsePrestamoRegular> {
      try {


        const create_regular = await this.databaseService.regular.create({
          data : {
            ...createPrestamoRegular,
              estado: true
          }
        });
        
        this.changeStateSource(createPrestamoRegular.id_dici);

        const response : responsePrestamoRegular = {
          status : HttpStatus.OK,
          message : 'Prestamo regular creado con éxito',
          data : create_regular
        };

        return response;

      }catch (error){
        if(error instanceof BadRequestException){
          throw error;
        }else{
          console.log(error);
          throw new HttpException('Interval Server error', HttpStatus.BAD_GATEWAY);
        }
      }
  }

  async findAll(page: number = 1, limit: number = 10){
    if (page < 1 ) {
      page = 1;
    }
    if (limit < 1) {
      limit = 10;
    }
    const skip = (page - 1) * limit;
  
    // Total de registros
    const totalRecords = await this.databaseService.regular.count();
  
    // Calcular total de páginas
    const totalPages = Math.ceil(totalRecords / limit);
  
    // Recuperar registros con paginación
    const data = await this.databaseService.regular.findMany({
      skip,
      take: +limit,
    });
  
    return {
      data,
      totalPages,
      totalRecords,
      currentPage: page,
    };
  }

  public async findOne(id_prestamo: number) {
    try {
      const obtenerPrestamo = await this.databaseService.regular.findUnique({
        where: {
          id_prestamo: id_prestamo
        },
        include: {
          estudiante: true,
        }
      });

      if(!obtenerPrestamo){
        throw new BadRequestException('Prestamo especial no encontrado');
      }

      return obtenerPrestamo;
    } catch (error) {
      if(error instanceof BadRequestException){
        throw error;
      }
      throw new InternalServerErrorException('Error interno al obtener un prestamo');
    }
  }

  async finalizarPrestamo(finPrestamo: FinPrestamoDto) {
    try {

      const findPrestamo = await this.databaseService.regular.findUnique({
        where:{
          id_prestamo: finPrestamo.id_prestamo,
        }
      });

      // generar sancion por pasar un día
      if(this.pasoUnDia(findPrestamo.hora_inicio, finPrestamo.fecha_fin)){

        this.generateSancion(findPrestamo.id_usuario, findPrestamo.rut);
      }
      const change_fin = await this.databaseService.regular.update({
        where: {
          id_prestamo: finPrestamo.id_prestamo
        },
        data: {
          hora_fin: finPrestamo.fecha_fin,
          estado: true,
        }
      });
    } catch (error) {
      throw error;
    }
  }
  
  remove(id: number) {
    return `This action removes a #${id} prestamoRegular`;
  }

  private pasoUnDia(date_ini: Date, date_fin: Date): boolean {
    const dateFin = new Date(date_fin);
    const dateIni = new Date(date_ini);
    const diffInMs = Math.abs(dateFin.getTime() - dateIni.getTime());

    const convertDay = 24 * 60 * 60 * 1000;
    return diffInMs >= convertDay;
  }

  private async generateSancion(id_usuario: number, rut: string){

    const defFecha:TiempoSancionDto = await this.setTimeSancion(rut);
    console.log(defFecha);
    if(defFecha.grado_sancion == grados_sancion.GRAVE){

      const sancion = await this.databaseService.sanciones.create({
        data: {
          grado: defFecha.grado_sancion,
          comentario: 'Acumulación de faltas Leves',
          estado_sancion: true,
          id_usuario: id_usuario,
          rut_estudiante: rut,
          fecha_inicio: defFecha.fecha_inicio,
          fecha_final: defFecha.fecha_termino,
        }
      });

      const deactivateAlumno = await this.databaseService.estudiante.update({
        where: {
          rut: rut
        }, data: {
          estado: false,
        }
      });
    }else{
      const sancion = await this.databaseService.sanciones.create({
        data: {
          grado: defFecha.grado_sancion,
          comentario: 'Entrega fuera del tiempo de préstamo',
          estado_sancion: true,
          id_usuario: id_usuario,
          rut_estudiante: rut,
          fecha_inicio: defFecha.fecha_inicio,
          fecha_final: defFecha.fecha_termino,
        }
      });
    }
  }

  private async isResourceFree(id_dici: string){
    
    const resource = await this.databaseService.recurso.findUnique({
      where: {
        id_dici: id_dici,
      }
    });
    
    if(resource.estado_recurso){
      return true;
    }

    return false;
  }

  private async changeStateSource(id_dici: string): Promise<void>{
    const change = await this.databaseService.recurso.update({
      where:{
        id_dici: id_dici,
      },
      data: {
        estado_recurso: false
      }
    });
  }

  private async setTimeSancion(rut_estudiante: string): Promise<TiempoSancionDto>{

    const findSancion:sanciones[] = await this.databaseService.sanciones.findMany({
      where: {
        rut_estudiante: rut_estudiante,
        estado_sancion: true,
      },

    });

    // sanciones leves duran todo el semestre
    const fecha_inicio = new Date()
    if(findSancion.length == 0){
      return {
        fecha_inicio: fecha_inicio,
        fecha_termino: calcularFechaSemestral(fecha_inicio),
        grado_sancion: grados_sancion.LEVE
      }
    }
    if(findSancion.length == 1){
      return {
        fecha_inicio: fecha_inicio,
        fecha_termino: calcularFechaSemestral(fecha_inicio),
        grado_sancion: grados_sancion.LEVE
      }
    }

    let cont_leve = 0;
    let cont_graves = 0;
    for(let sancion of findSancion){
      // si la sanción está activa
      if(sancion.fecha_final.getDate() > new Date().getDate()){
        if(sancion.grado == grados_sancion.LEVE){
          cont_leve++; 
        };
        cont_graves++;
      };
    };

    if(cont_leve > 2 && cont_graves == 0){
      const fecha_termino = new Date(fecha_inicio);
      // determinar que la duración del castigo es de una semana
      fecha_termino.setDate(fecha_termino.getDate() + 7);

      const tiempo:TiempoSancionDto = {
        fecha_inicio: fecha_inicio,
        fecha_termino: fecha_termino,
        grado_sancion: grados_sancion.GRAVE
      };
      return tiempo;

    }

    if(cont_graves > 1){
      // determina castigo durante todo el semestre
      const fecha_termino = calcularFechaSemestral(fecha_inicio);

      const tiempo: TiempoSancionDto = {
        fecha_inicio: fecha_inicio,
        fecha_termino: fecha_termino,
        grado_sancion: grados_sancion.GRAVE
      }
      return tiempo;
    }

    return null;

  }
  public async obtenerPrestamosActivos(page: number = 1, limit: number = 10){
      try {
          if (page < 1 ) {
            page = 1;
          }
          if (limit < 1) {
            limit = 10;
          }
          const skip = (page - 1) * limit;
        
          // Total de registros
          const totalRecords = await this.databaseService.regular.count(
            {
              where: {
                hora_fin: null,
              }
            }
          );
        
          // Calcular total de páginas
          const totalPages = Math.ceil(totalRecords / limit);
        
          // Recuperar registros con paginación
          const data = await this.databaseService.regular.findMany({
            where: {
              hora_fin: null,
            },
            skip,
            take: +limit,
          });
          return {
            data,
            totalPages,
            totalRecords,
            currentPage: page,
          };;
      } catch (error) {
        throw new InternalServerErrorException('Error interno al obtener los prestamos activos');
      }
  }

  public async obtenerPrestamosFinalizados(){
    try {
      const prestamos = await this.databaseService.regular.findMany({
        where: {
          NOT: {
            hora_fin: null
          }
        }
      });

      return prestamos;
    } catch (error) {
      throw new InternalServerErrorException('Error interno al obtener los prestamos finalizados');
    }
  }
}
