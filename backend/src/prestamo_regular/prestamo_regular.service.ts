import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto';
import { UpdatePrestamoRegularDto } from './dto/update-prestamo_regular.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { DatabaseService } from '../database/database/database.service';
import { grados_sancion, regular } from '@prisma/client';
import { ResponseDto } from '../recursos/dto/response.dto';
import { responsePrestamoRegular } from './dto/responde.dto';
import { FinPrestamoDto } from './dto/fin-prestamo-dto';

@Injectable()
export class PrestamoRegularService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createPrestamoRegular: CreatePrestamoRegularDto) : Promise<responsePrestamoRegular> {
      try {
        const create_regular = await this.databaseService.regular.create({
          data : createPrestamoRegular
        });
        

        const response : responsePrestamoRegular = {
          status : HttpStatus.OK,
          message : 'Prestamo regular creado con éxito',
          data : create_regular
        };

        return response;

      }catch (error){
        throw new HttpException('Error al crear un prestamo regular', HttpStatus.BAD_REQUEST);
      }
  }

  async findAll() {
    return await this.databaseService.regular.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.regular.findUnique({where: {id_prestamo: id}});
  }

  async finalizarPrestamo(finPrestamo: FinPrestamoDto) {
    try {
      const change_fin = await this.databaseService.regular.update({
        where: {
          id_prestamo: finPrestamo.id_prestamo
        },
        data: {
          hora_fin: finPrestamo.fecha_fin
        }
      });

      // generar sancion por pasar un día
      if(this.pasoUnDia(change_fin.hora_inicio, change_fin.hora_fin)){
        this.generateSancion(change_fin.id_usuario, change_fin.rut);
      }
    } catch (error) {
      
    }
  }

  async obtenerPrestamosActivos(){
    try {
      const activos = await this.databaseService.regular.findMany({
        where: {
          hora_fin : null
        }
      });
      
      return activos;
    } catch(error){
      throw new HttpException('Error al obtener los prestamos regulares activos', HttpStatus.BAD_REQUEST);
    }
  }

  async obtenerPrestamosFinalizados(){
    try {
      const activos = await this.databaseService.regular.findMany({
        where: {
          hora_fin: {
            not: null,
          }
        }
      });
      
      return activos;
    } catch(error){
      throw new HttpException('Error al obtener los prestamos regulares activos', HttpStatus.BAD_REQUEST);
    }
  }
  
  remove(id: number) {
    return `This action removes a #${id} prestamoRegular`;
  }

  private pasoUnDia(date_ini: Date, date_fin: Date): boolean {
    const diffInMs = Math.abs(date_fin.getTime() - date_ini.getTime());

    const convertDay = 24 * 60 * 60 * 1000;
    return diffInMs >= convertDay;
  }

  private async generateSancion(id_usuario: number, rut: string){
    const sancion = await this.databaseService.sanciones.create({
      data: {
        grado: grados_sancion.LEVE,
        comentario: 'Entrega recurso al día siguiente',
        estado_sancion: true,
        id_usuario: id_usuario,
        rut: rut
      }
    });
  }
}
