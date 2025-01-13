import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto.js';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { responsePrestamoEspecial } from './dto/response.dto';
import { FinPrestamoEspecialDto } from './dto/finalizar-prestamo.dto.js';

@Injectable()
export class PrestamoEspecialService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(prestamo_especial: CreatePrestamoEspecialDto) {
    try {
      const existStudent = await this.databaseService.estudiante.findUnique({
        where: {
          rut: prestamo_especial.rut_estudiante,
        },
      });

      if (!existStudent) {
        throw new HttpException(
          'Estudiante no encontrado',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!existStudent.estado) {
        throw new BadRequestException('Estudiante deshabilitado para prestamo');
      }

      const existRecursoOcupado = await this.changeStateResource(
        prestamo_especial.id_dici,
      );
      if (!existRecursoOcupado) {
        throw new HttpException(
          'El recurso ya se encuentra ocupado',
          HttpStatus.BAD_REQUEST,
        );
      }

      const prestamoEspecial = await this.databaseService.especial.create({
        data: {
          ...prestamo_especial,
          estado: true,
        },
      });

      return prestamoEspecial;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        'Error al crear un prestamo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async finalizarPrestamoEspecial(
    finalizarPrestamoDto: FinPrestamoEspecialDto,
  ) {
    try {
      const { id_prestamo } = finalizarPrestamoDto;

      const updatePrestamo = await this.databaseService.especial.update({
        where: {
          id_prestamo,
          estado: true,
        },
        data: {
          estado: false,
        },
      });

      const change_recurso = await this.databaseService.recurso.update({
        where: {
          id_dici: updatePrestamo.id_dici,
        },
        data: {
          estado_recurso: true,
        },
      });

      return {
        message: 'Prestamo finalizado con éxito',
        statusCode: HttpStatus.OK,
        data: updatePrestamo,
      };
    } catch (error) {
      throw new HttpException(
        'Error al finalizar el prestamo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async findAll(page?: number, limit?: number) {
    try {
      // Si no se especifican page o limit, devolver todos los registros
      if (!page || !limit) {
        const data = await this.databaseService.especial.findMany();

        return {
          data,
          totalPages: 1,
          totalRecords: data.length,
          currentPage: 1,
        };
      }

      // Validación para que page y limit sean válidos
      if (page < 1) {
        page = 1;
      }
      if (limit < 1) {
        limit = 10;
      }

      const skip = (page - 1) * limit;

      // Total de registros
      const totalRecords = await this.databaseService.especial.count();

      // Calcular total de páginas
      const totalPages = Math.ceil(totalRecords / limit);

      // Recuperar registros con paginación
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
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno al encontrar todos los préstamos especiales',
      );
    }
  }

  public async findOne(id: number) {
    try {
      const exists = await this.databaseService.especial.findUnique({
        where: {
          id_prestamo: id,
        },
        include: {
          estudiante: true,
        },
      });

      if (!exists) {
        throw new BadRequestException('Error prestamo no encontrado');
      }

      return exists;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Error interno al encontrar un prestamo especial',
      );
    }
  }

  async update(
    id: number,
    updatePrestamoEspecialDto: UpdatePrestamoEspecialDto,
  ) {
    // puede cambiar la fecha de entrega
    try {
      const prestamoEspecial = await this.databaseService.especial.update({
        where: {
          id_prestamo: id,
        },
        data: updatePrestamoEspecialDto,
      });

      const response: responsePrestamoEspecial = {
        message: 'prestamo actualizado con exito',
        status_code: HttpStatus.OK,
        data: {
          id_prestamo: prestamoEspecial.id_prestamo,
          descripcion: prestamoEspecial.descripcion,
          motivo: prestamoEspecial.motivo,
          id_usuario: prestamoEspecial.id_usuario,
          fecha_inicio: prestamoEspecial.fecha_inicio,
          fecha_fin: prestamoEspecial.fecha_fin,
        },
      };
      return response;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el prestamo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} prestamoEspecial`;
  }

  private async changeStateResource(id_dici: string) {
    const recurso = await this.databaseService.recurso.findUnique({
      where: {
        id_dici: id_dici,
      },
    });

    if (!recurso) {
      throw new HttpException('Recurso no encontrado', HttpStatus.BAD_REQUEST);
    }

    if (!recurso.estado_recurso) {
      return false;
    }
    const changeRecurso = await this.databaseService.recurso.update({
      where: {
        id_dici: id_dici,
      },
      data: {
        estado_recurso: false,
      },
    });

    return true;
  }

  public async obtenerPrestamosEspecialesActivos() {
    return await this.databaseService.especial.findMany({
      where: {
        estado: true,
      },
      include: {
        estudiante: true,
      },
    });
  }

  public async obtenerHistorial() {
    try {
      return await this.databaseService.especial.findMany({
        where: {
          estado: false,
        },
        include: {
          estudiante: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error interno al obtener el historial de prestamos especiales',
      );
    }
  }
}
