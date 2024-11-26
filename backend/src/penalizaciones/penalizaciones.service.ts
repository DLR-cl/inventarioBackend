import { BadRequestException, HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto';
import { Penalizacione } from './entities/penalizacione.entity';
import { DatabaseService } from '../database/database/database.service';
import { grados_sancion, sanciones } from '@prisma/client';
import { calcularFechaSemestral } from 'src/auth/lib/functions';
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

    } catch (error) {
      throw new HttpException('Error al crear la sancion', HttpStatus.BAD_REQUEST);
    }
  }

  async findAllLeves() {
    try {
      const leves: sanciones[] = await this.databaseService.sanciones.findMany({
        where: {
          grado: grados_sancion.LEVE
        }
      });
      if (!leves) {
        throw new BadRequestException('No hay sanciones Leves');
      }
      return leves
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new HttpException('Internal Error Server', HttpStatus.BAD_GATEWAY);
      }
    }
  }

  async findAllGraves() {
    try {
      const graves: sanciones[] = await this.databaseService.sanciones.findMany({
        where: {
          grado: grados_sancion.GRAVE
        }
      });
      if (!graves) {
        throw new BadRequestException('No hay sanciones Leves');
      }
      return graves
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new HttpException('Internal Error Server', HttpStatus.BAD_GATEWAY);
      }
    }
  }

  public async findAll(){
    return await this.databaseService.sanciones.findMany();
  }

  public async findOne(id_sancion: number){
    try {
      
      const sancion = await this.databaseService.sanciones.findUnique({
        where: {
          id_sanciones: id_sancion,
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
  @Cron('0 30 11 * * 1-5', {
    name: 'updatePenalizaciones',
    timeZone: 'America/Santiago'
  })
  private async actualizacionAutomaticaEstado(): Promise<void>{
    try {
      
      const scanPenalizaciones = await this.databaseService.sanciones.findMany({
        where: {
          estado_sancion: true,
        }
      });

      const fecha_actual = new Date();
     scanPenalizaciones.forEach((penalizacion) => {
        const fechaTermino = new Date(penalizacion.fecha_final);
        if(fecha_actual < fechaTermino){
          const sancion = this.finalizarSancion(penalizacion.id_sanciones);
          console.log('Penalizacion finalizada');
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

    return sancion;
  }
  update(id: number, updatePenalizacioneDto: UpdatePenalizacioneDto) {
    return `This action updates a #${id} penalizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} penalizacione`;
  }
}
