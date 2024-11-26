import { Injectable } from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto';

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

  update(id: number, updatePrestamoEspecialDto: UpdatePrestamoEspecialDto) {
    return `This action updates a #${id} prestamoEspecial`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoEspecial`;
  }
}
