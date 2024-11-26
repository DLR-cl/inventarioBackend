import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { DatabaseService } from '../database/database/database.service';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class EstudiantesService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createEstudiante: CreateEstudianteDto) : Promise<ResponseDto<CreateEstudianteDto>> {
    try {
      console.log('hola');
      const nuevoEstudiante  = await this.databaseService.estudiante.create({
        data : {
          ...createEstudiante,
          estado: true,
        }
      })

      const response : ResponseDto<CreateEstudianteDto>= {
        statusCode : HttpStatus.CREATED,
        message: 'Usuario creado con exito',
        data : createEstudiante
      }
      return response
    } catch(error){
      throw new HttpException('Error al crear estudiante', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll()  {
    try {
      return this.databaseService.estudiante.findMany()
    }catch(error){
      throw new HttpException('Error al encontrar estudiantes', HttpStatus.BAD_GATEWAY)
    }
  }

  async findOne(id: string) {
    return await this.databaseService.estudiante.findUnique({
      where : {
        rut : id,
      }
    });
  }

  public async getHistorialEstudiantes(){
    const historialPrestamos = await this.databaseService.estudiante.findMany({
      include:{
        especial: true,
        regular: true,
      },
      where: {
        
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
