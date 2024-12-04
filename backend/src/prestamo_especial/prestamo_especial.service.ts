import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto.js';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { responsePrestamoEspecial } from './dto/response.dto';

@Injectable()
export class PrestamoEspecialService {

  constructor(
    private readonly databaseService: DatabaseService
  ){}

  async create(prestamo_especial: CreatePrestamoEspecialDto) {
    try {

      const existRecursoOcupado = await this.changeStateResource(prestamo_especial.id_dici)
      if(! existRecursoOcupado){
        throw new HttpException('El recurso ya se encuentra ocupado', HttpStatus.BAD_REQUEST);
      }

      const existStudent = await this.databaseService.estudiante.findUnique({
        where: {
          rut: prestamo_especial.rut_estudiante,
        }
      }) 

      if(!existStudent){
        throw new HttpException('Estudiante no encontrado', HttpStatus.BAD_REQUEST);
      }

      const prestamoEspecial = await this.databaseService.especial.create({
        data: {
          ...prestamo_especial,
          estado: true,
            
        }
      })

      return prestamoEspecial;

    } catch (error) {
      if(error instanceof HttpException){
        throw error;
      }

      throw new HttpException('Error al crear un prestamo', HttpStatus.BAD_REQUEST);
    }
  }

  public async finalizarPrestamoEspecial(id: number){
    try {
      const exist = this.findOne(id);

      const updatePrestamo = await this.databaseService.especial.update({
        where: {
          id_prestamo: id,
          estado: true,
        },
        data: {
          estado: false,
        }
      })

      return {
        message: 'Prestamo finalizado con éxito',
        statusCode: HttpStatus.OK,
        data: updatePrestamo,
      }
    } catch (error) {
      throw error;
    }
  }

  public async findAll(page: number, limit: number) {
    if(page < 1){
      page = 1;
    }
    if(limit < 1){
      limit = 10;
    }

    const skip = (page - 1) * limit;

    const totalRecords = await this.databaseService.especial.count();

    const totalPages = Math.ceil(totalRecords / limit);

    const data = await this.databaseService.especial.findMany({
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

  public async findOne(id: number) {
    try {
      const exists = await this.databaseService.especial.findUnique({
        where: {
          id_prestamo: id,
        },
        include: {
          estudiante: true,
        }
      });

      if(!exists){
        throw new BadRequestException('Error prestamo no encontrado');
      }

      return exists;
    } catch (error) {
      if(error instanceof BadRequestException){
        throw error;
      }

      throw new InternalServerErrorException('Error interno al encontrar un prestamo especial');
    }
  }

  async update(id: number, updatePrestamoEspecialDto: UpdatePrestamoEspecialDto) {
    // puede cambiar la fecha de entrega
    try {
      const prestamoEspecial = await this.databaseService.especial.update({
        where: {
          id_prestamo: id,
        },
        data: updatePrestamoEspecialDto
      });

      const response: responsePrestamoEspecial = {
        message : 'prestamo actualizado con exito',
        status_code: HttpStatus.OK,
        data: {
          id_prestamo: prestamoEspecial.id_prestamo,
          descripcion: prestamoEspecial.descripcion,
          motivo: prestamoEspecial.motivo,
          id_usuario: prestamoEspecial.id_usuario,
          fecha_inicio: prestamoEspecial.fecha_inicio,
          fecha_fin: prestamoEspecial.fecha_fin,
        }
      }
      return response
    } catch (error) {
      throw new HttpException('Error al actualizar el prestamo', HttpStatus.BAD_REQUEST);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoEspecial`;
  }


  private async changeStateResource(id_dici: string){
    


    const recurso = await this.databaseService.recurso.findUnique({
      where:{
        id_dici: id_dici
      }
    });

    if(!recurso){
      throw new HttpException('Recurso no encontrado', HttpStatus.BAD_REQUEST);
    }

    if(!recurso.estado_recurso){
      return false;
    }
    const changeRecurso = await this.databaseService.recurso.update({
      where: {
        id_dici: id_dici,
      },
      data: {
        estado_recurso: false,
      }
    });

    return true;
  }

  public async obtenerPrestamosActivos(){
    return await this.databaseService.especial.findMany({
      where: {
        estado: true,
      },
      include: {
        estudiante: true,
      }
    })
  }

  public async obtenerHistorial(){
    return await this.databaseService.especial.findMany({
      where: {
        estado: false,
      },
      include: {
        estudiante: true,
      }
    })
  }
}
