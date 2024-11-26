import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto';
import { DatabaseService } from '../database/database/database.service';
import { responsePrestamoEspecial } from './dto/response.dto';

@Injectable()
export class PrestamoEspecialService {

  constructor(
    private readonly databaseService: DatabaseService
  ){}


  async create(prestamo_especial: CreatePrestamoEspecialDto) {
    try {
      if(!this.changeStateResource(prestamo_especial.id_dici)){
        throw new HttpException('El recurso ya se encuentra ocupado', HttpStatus.BAD_REQUEST);
      }

      const prestamoEspecial = await this.databaseService.especial.create({
        data: {
            ...prestamo_especial,
            estado: true,
            
        }
      })

      return prestamoEspecial;

    } catch (error) {
      throw new HttpException('Error al crear un prestamo', HttpStatus.BAD_REQUEST);
    }
  }


  findAll() {
    return `This action returns all prestamoEspecial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamoEspecial`;
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
}
