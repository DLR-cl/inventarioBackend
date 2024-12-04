import { BadRequestException, HttpCode, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto.js';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { grados_sancion, sanciones } from '@prisma/client';
import { calcularFechaSemestral } from '../auth/lib/functions.js';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class PenalizacionesService {

  constructor(private readonly databaseService: DatabaseService) { }
  async create(createPenalizacioneDto: CreatePenalizacioneDto) {
    try {
      const fecha_inicio = new Date();
      if (createPenalizacioneDto.grado == grados_sancion.LEVE) {

        const sancion = await this.databaseService.sanciones.create({
          data: {
            grado: createPenalizacioneDto.grado,
            comentario: createPenalizacioneDto.comentario,
            estado_sancion: true,
            id_usuario: createPenalizacioneDto.id_usuario,
            fecha_inicio: fecha_inicio,
            fecha_final: calcularFechaSemestral(fecha_inicio),
            rut_estudiante: createPenalizacioneDto.rut_estudiante,
          }
        })

      } else {
        // definir
        const existGrave = await this.databaseService.sanciones.findMany({
          where: {
            rut_estudiante: createPenalizacioneDto.rut_estudiante,
            grado: grados_sancion.GRAVE,
            estado_sancion: true,
          }
        })
        if(existGrave){
          const sancion = await this.databaseService.sanciones.create({
            data: {
              grado: createPenalizacioneDto.grado,
              comentario: createPenalizacioneDto.comentario,
              estado_sancion: true,
              id_usuario: createPenalizacioneDto.id_usuario,
              fecha_inicio: fecha_inicio,
              fecha_final: calcularFechaSemestral(fecha_inicio),
              rut_estudiante: createPenalizacioneDto.rut_estudiante,
            }
          });
          
        }else{
          const fecha_termino = new Date(fecha_inicio);
          fecha_termino.setDate(fecha_termino.getDate()+7);
          
          const sancion = await this.databaseService.sanciones.create({
            data: {
              grado: createPenalizacioneDto.grado,
              comentario: createPenalizacioneDto.comentario,
              estado_sancion: true,
              id_usuario: createPenalizacioneDto.id_usuario,
              fecha_inicio: fecha_inicio,
              fecha_final: fecha_termino,
              rut_estudiante: createPenalizacioneDto.rut_estudiante,
            }
          });
        }

        const deactivateAlumno = await this.databaseService.estudiante.update({
          where:
          {
            rut: createPenalizacioneDto.rut_estudiante,
          },
          data: {
            estado: false,
          }
        });
      }
      return {
        message: 'sancion creada con éxito',
        statusCode: HttpStatus.OK
      }
    } catch (error) {
      throw new HttpException('Error al crear la sancion', HttpStatus.BAD_REQUEST);
    }
  }

  async findAllByGrado(grado: grados_sancion) {
    try {
      if(!(grado in grados_sancion)){
        throw new BadRequestException('Grado no reconocido');
      }
      const sancionesGrado: sanciones[] = await this.databaseService.sanciones.findMany({
        where: {
          grado: grado
        },
        include: {
          Estudiante: true,
        }
      });

      return sancionesGrado;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new HttpException('Internal Error Server', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

 

  public async findAll(){
    return await this.databaseService.sanciones.findMany({
      include: {
        Estudiante: true,
      }
    });
  }

  public async findOne(id_sancion: number){
    try {
      
      const sancion = await this.databaseService.sanciones.findUnique({
        where: {
          id_sanciones: id_sancion,
        },
        include: {
          Estudiante: true,
        }
      });
      
      if(!sancion){
        throw new BadRequestException('No existe sancion');
      }
      
      return sancion;
    } catch (error) {
      throw error;
    }
  }
  @Cron('0 30 8 * * 1-5', {
    name: 'updatePenalizaciones',
    timeZone: 'America/Santiago'
  })
  private async actualizacionAutomaticaEstado(): Promise<void>{
    try {
      console.log('hola papus');
      const scanPenalizaciones = await this.databaseService.sanciones.findMany({
        where: {
          estado_sancion: true,
        }
      });
      console.log(scanPenalizaciones);
      const fecha_actual = new Date();
     scanPenalizaciones.forEach((penalizacion) => {
        const fechaTermino = new Date(penalizacion.fecha_final);
        if(fecha_actual > fechaTermino){
          console.log('Finalizando sancion');
          const sancion = this.finalizarSancion(penalizacion.id_sanciones);
        }
      })


    } catch (error) {
      throw error;
    }
  }

  private async finalizarSancion(id_sancion: number){
    const sancion = await this.databaseService.sanciones.update({
      where:{
        id_sanciones: id_sancion
      },
      data: {
        estado_sancion: false,
      }
    });

    if(sancion.grado == grados_sancion.GRAVE){
      const activarEstudiante = await this.databaseService.estudiante.update({
        where: {
          rut: sancion.rut_estudiante,
        },
        data: {
          estado: true,
        }
      })
    }

    return sancion;
  }
  public async update(id: number, updatePenalizacioneDto: UpdatePenalizacioneDto) {
    try {
      const sancion = this.findOne(id);
      return await this.databaseService.sanciones.update({
        where: {
          id_sanciones: id,
        },
        data: updatePenalizacioneDto
      });

    } catch (error) {
      if(error instanceof BadRequestException){
        throw error;
      }
      throw new InternalServerErrorException('Error al finalizar una penalización');
    }

  }

  public async remove(id: number) {
    try {
      const sancion = await this.findOne(id);
      const remove = await this.databaseService.sanciones.delete({
        where: {
          id_sanciones: id,
        }
      });

      return {
        message: 'sancion borrada con éxito',
        statusCode: HttpStatus.OK,
        object: sancion
      }
    } catch (error) {
      throw new InternalServerErrorException('Error interno al borrar la penalización')
    }
  }

  public async obtenerPenalizacionesActivas(){
    return await this.databaseService.sanciones.findMany({
      where: {
        estado_sancion: true,
      }
    })
  }

  public async obtenerCantidadSancionesActivasPorEstudiante(rut_estudiante: string){
    
    const contGraves = await this.databaseService.sanciones.count({
      where: {
        rut_estudiante: rut_estudiante,
        grado: grados_sancion.GRAVE,
        estado_sancion: true,
      }
    });

    const contLeves = await this.databaseService.sanciones.count({
      where: {
        rut_estudiante: rut_estudiante,
        grado: grados_sancion.LEVE,
        estado_sancion: true,
      }
    });

    return { 
      graves: contGraves,
      leves: contLeves,
    }
  }
}
