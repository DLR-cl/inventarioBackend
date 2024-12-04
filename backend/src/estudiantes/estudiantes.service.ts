import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { DatabaseService } from '../database/database/database.service.js';
import { ResponseDto } from './dto/response.dto';
import * as csv from 'csv-parse';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CellValue, Row, Worksheet } from 'exceljs';
import e from 'express';

@Injectable()
export class EstudiantesService {

  constructor(private readonly databaseService: DatabaseService) { }

  async format(data: Worksheet) {
    const list: string[][] = [];
    data.eachRow((row: Row) => {
      list.push([...(row.values as CellValue[])].splice(1) as string[]);
    });
    if (!list.length) {
      return [];
    }

    const expectedColumns = ['Rut', 'Nombre', 'Direccion', 'Fono', 'AÃ±o Ingreso', 'E-mail'];
    // Valida que las columnas coincidan
    const missingColumns = expectedColumns.filter((col) => !fields.includes(col));
    if (missingColumns.length) {
      throw new Error(`El archivo Excel no contiene las columnas esperadas: ${missingColumns.join(', ')}`);
    }
    const [fields, ...values] = list;
    const dataFormat = values.map((valuesItem) => (fields as string[]).reduce(
      (acc, field, index) => Object.assign(acc, { [field]: valuesItem[index] }), {},
    ),
    );
    

    const listStudents = await this.databaseService.estudiante.findMany({
      select: {
        rut: true,
      },
      where: {
        estado: true,
      }
    })
    const rutList = listStudents.map(student => student.rut);


    for (let object of dataFormat) {
      let estudiante: CreateEstudianteDto = {
        rut: object['Rut'] + '',
        nombre: object['Nombre'] + '',
        direccion: object['Direccion'] + '',
        fono: object['Fono'] + '',
        ingreso: object['AÃ±o Ingreso'],
        correo: object['E-mail']
      }
      console.log(object['Rut'] in rutList);
      console.log(object['Rut'])
      if (!(object['Rut'] in rutList)) {
        let findStudent = await this.databaseService.estudiante.findUnique({
          where: {
            rut: object['Rut']+'',
          }
        });
        if(!findStudent){
          let newStudent = await this.databaseService.estudiante.create({
            data: estudiante
          });
        }
      }
    }

    await this.actualizarEstudiantesNomina(rutList, dataFormat);    
    console.log(dataFormat[0]['Rut']);
    return dataFormat
  }

  private async actualizarEstudiantesNomina(listRut: string[], dataFormat: {}[]){
    for (let rut_student of listRut) {
      let cont = 0;
      for (let student of dataFormat) {
        if (rut_student == student['Rut']) {
          cont++;
        }
      }

      if (cont == 0) {
        const deshabilitar = await this.databaseService.estudiante.update({
          where: {
            rut: rut_student,
          },
          data: {
            estado: false,
          }
        })
      }
    }

  }
  async create(createEstudiante: CreateEstudianteDto): Promise<ResponseDto<CreateEstudianteDto>> {
    try {
      console.log('hola');
      const nuevoEstudiante = await this.databaseService.estudiante.create({
        data: {
          ...createEstudiante,
          estado: true,
        }
      })

      const response: ResponseDto<CreateEstudianteDto> = {
        statusCode: HttpStatus.CREATED,
        message: 'Usuario creado con exito',
        data: createEstudiante
      }
      return response
    } catch (error) {
      throw new HttpException('Error al crear estudiante', HttpStatus.BAD_REQUEST)
    }
  }

  async findAll(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;
      const totalRecords = await this.databaseService.estudiante.count();
      const totalPages = Math.ceil(totalRecords / limit);

      const data = await this.databaseService.estudiante.findMany({
        skip,
        take: +limit,
      });

      return {
        data,
        totalPages,
        totalRecords,
        currentPage: page,
      };
    } catch (error) {
      throw new HttpException('Error al encontrar estudiantes', HttpStatus.BAD_GATEWAY)
    }
  }

  async findOne(id: string) {
    return await this.databaseService.estudiante.findUnique({
      where: {
        rut: id,
      }
    });
  }

  public async getHistorialEstudiantes() {
    const historialPrestamos = await this.databaseService.estudiante.findMany({
      include: {
        especial: true,
        regular: true,
      },
      where: {

      }
    })
  }

  public async obtenerCantidadEstudiantesActivos(){
    return await this.databaseService.estudiante.findMany({
      where: {
        estado: true,
      }
    })
  }
  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }

  public async actualizarEstudiante(rut: string, estudiante: UpdateEstudianteDto){
    try {
      const student = await this.databaseService.estudiante.findUnique({
        where: {
          rut: rut,
        }
      });
      if(!student){
        throw new BadRequestException('Estudiante a actualizar no existe');
      }

      const updateStudent = await this.databaseService.estudiante.update({
        where: {
          rut: rut,
        },
        data: estudiante,
      })

      return {
        message: 'estudiante actualizado',
        statusCode: HttpStatus.OK,
        object: updateStudent
      }
    } catch (error) {
      if(error instanceof BadRequestException){
        throw error;
      }  

      throw new InternalServerErrorException('Error interno al actualizar un estudiante');
    }
  }
}
