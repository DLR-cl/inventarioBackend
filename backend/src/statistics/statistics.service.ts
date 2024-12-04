import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database/database.service.js';

@Injectable()
export class StatisticsService {

  constructor(
    private readonly databaseService : DatabaseService
  ) {}

  async getCountRecursos(){

    const count = await this.databaseService.recurso.count();
    const response = {
      count: count
    };
    return response;
  }

  async getCountCategorias(){
    const count = await this.databaseService.categoria.count();
    const response = {
      count: count
    };
    return response;
  }

  async getCountPrestamosRegularActivos(){
    const count = await this.databaseService.regular.count(
      {
        where: {
          estado: true
        }
      }
    );
    const response = {
      count: count
    };
    return response;
  }

  async getCountEstudiantesActivos(){
    const count = await this.databaseService.estudiante.count(
      {
        where: {
          estado: true
        }
      }
    );
    const response = {
      count: count
    };
    return response;
  }

  async cantidadRecursosPorCategoria() {
    const cantidaRecursos = await this.databaseService.recurso.groupBy({
      by: ['id_categoria'],
      _count: true
    });
  
    const recursosConNombres = await Promise.all(
      cantidaRecursos.map(async (item) => {
        const categoria = await this.databaseService.categoria.findUnique({
          where: { id_categoria: item.id_categoria },
          select: { nombre_categoria: true },
        });
        return {
          categoria: categoria?.nombre_categoria || 'Sin Categoría',
          cantidad: item._count,
        };
      })
    );
    return recursosConNombres;
  }
}
