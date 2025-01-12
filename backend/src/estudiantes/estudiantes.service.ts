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

    const [fields, ...values] = list;

    const expectedColumns = ['Rut', 'Nombre', 'Direccion', 'Fono', 'AÃ±o Ingreso', 'E-mail'];
    // Valida que las columnas coincidan
    const missingColumns = expectedColumns.filter((col) => !fields.includes(col));
    if (missingColumns.length) {
      throw new Error(`El archivo Excel no contiene las columnas esperadas: ${missingColumns.join(', ')}`);
    }

    const dataFormat = values.map((valuesItem) =>
      fields.reduce((acc, field, index) => Object.assign(acc, { [field]: valuesItem[index] }), {}),
    );

    // Obtén todos los estudiantes activos
    const estudiantesActivos = await this.databaseService.estudiante.findMany({
      select: {
        rut: true,
      },
      where: {
        estado: true,
      },
    });

    // Convierte la lista de estudiantes activos a un Set para búsquedas rápidas
    const rutsActivosSet = new Set(estudiantesActivos.map((student) => student.rut));

    // Nuevos estudiantes a insertar
    const nuevosEstudiantes: CreateEstudianteDto[] = [];
    const rutsNuevosEnNomina = new Set<string>();

    for (const object of dataFormat) {
      const rut = object['Rut'] + '';
      rutsNuevosEnNomina.add(rut); // Agrega a la lista de RUTs nuevos

      if (!rutsActivosSet.has(rut)) {
        // Si el estudiante no está en los activos
        const findStudent = await this.databaseService.estudiante.findUnique({
          where: { rut },
        });

        if (!findStudent) {
          // Agrega a la lista para insertar
          nuevosEstudiantes.push({
            rut,
            nombre: object['Nombre'] + '',
            direccion: object['Direccion'] + '',
            fono: object['Fono'] + '',
            ingreso: object['AÃ±o Ingreso'],
            correo: object['E-mail'],
          });
        }
      }
    }

    // Inserta nuevos estudiantes en un solo batch
    if (nuevosEstudiantes.length > 0) {
      await this.databaseService.estudiante.createMany({
        data: nuevosEstudiantes,
        skipDuplicates: true, // Evita duplicados en la inserción
      });
    }

    // Deshabilitar estudiantes que no están en la nómina nueva
    const rutsADeshabilitar = Array.from(rutsActivosSet).filter((rut) => !rutsNuevosEnNomina.has(rut));

    if (rutsADeshabilitar.length > 0) {
      await this.databaseService.estudiante.updateMany({
        where: { rut: { in: rutsADeshabilitar } },
        data: { estado: false },
      });
    }

    return dataFormat;
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

  public async obtenerCantidadEstudiantesActivos() {
    return await this.databaseService.estudiante.findMany({
      where: {
        estado: true,
      }
    })
  }
  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }

  public async actualizarEstudiante(rut: string, estudiante: UpdateEstudianteDto) {
    try {
      const student = await this.databaseService.estudiante.findUnique({
        where: {
          rut: rut,
        }
      });
      if (!student) {
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
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Error interno al actualizar un estudiante');
    }
  }
}
