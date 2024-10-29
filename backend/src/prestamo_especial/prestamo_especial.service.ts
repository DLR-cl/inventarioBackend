import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto';
import { DatabaseService } from '../database/database/database.service';
import { RecursosService } from '../recursos/recursos.service';
import { responsePrestamoEspecial } from './dto/response.dto';

@Injectable()
export class PrestamoEspecialService {

  constructor(
    private readonly databaseService: DatabaseService
  ){}


  async create(createPrestamoEspecialDto: CreatePrestamoEspecialDto) {
    try {
      if(!this.changeStateResource(createPrestamoEspecialDto.id_dici)){
        throw new HttpException('El recurso ya se encuentra ocupado', HttpStatus.BAD_REQUEST);
      }

      const newPrestamo = await this.databaseService.especial.create({
        data: createPrestamoEspecialDto
      })

      return newPrestamo;

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
    
    if(this.isResourceFree(id_dici)){
      throw new BadRequestException('El recurso ya está siendo utilizado');
    };
    
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

  private async isResourceFree(id_dici: string){
    const resoure = await this.databaseService.recurso.findUnique({
      where: {
        id_dici: id_dici,
      }
    });

    if(!resoure.estado_recurso){
      return true;
    }
    return false;
  }
}
