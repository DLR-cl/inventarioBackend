import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { DatabaseService } from '../database/database/database.service.js';
import { ResponseDto } from './dto/response.dto';
import * as csv from 'csv-parse';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CellValue, Row, Worksheet } from 'exceljs';

@Injectable()
export class EstudiantesService {

  constructor(private readonly databaseService : DatabaseService){}

  format(data:Worksheet): Array<Record<string, unknown>> {
    const list: string[][] = [];
    data.eachRow((row: Row) => {
      list.push([...(row.values as CellValue[])].splice(1) as string[]);
    });
    if(!list.length){
      return [];
    }
    const [fields, ...values] = list;
    return values.map((valuesItem) => (fields as string[]).reduce (
      (acc, field, index) => Object.assign(acc, { [field]: valuesItem[index]}), {},
    ),
  );
  }

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
