import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service.js';
import { get } from 'node:http';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {
  }

  @Get('count-recursos')
  getCountRecursos(){
    return this.statisticsService.getCountRecursos();
  }

  @Get('count-categorias')
  getCountCategorias(){
    return this.statisticsService.getCountCategorias();
  }

  @Get('count-prestamos-regular-activos')
  getCountPrestamosRegular(){
    return this.statisticsService.getCountPrestamosRegularActivos();
  }

  @Get('count-estudiantes')
  getCountEstudiantes(){
    return this.statisticsService.getCountEstudiantesActivos();
  }

  @Get('cantidad-recursos-por-categoria')
  cantidadRecursosPorCategoria(){
    return this.statisticsService.cantidadRecursosPorCategoria();
  }
}
