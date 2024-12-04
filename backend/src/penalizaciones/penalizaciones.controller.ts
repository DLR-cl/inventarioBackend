import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PenalizacionesService } from './penalizaciones.service.js';
import { CreatePenalizacioneDto } from './dto/create-penalizacione.dto.js';
import { UpdatePenalizacioneDto } from './dto/update-penalizacione.dto.js';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { grados_sancion } from '@prisma/client';

@Controller('penalizaciones')
export class PenalizacionesController {
  constructor(private readonly penalizacionesService: PenalizacionesService) {}

  @Post()
  create(@Body() createPenalizacioneDto: CreatePenalizacioneDto) {
    return this.penalizacionesService.create(createPenalizacioneDto);
  }

  @Get()
  findAll() {
    return this.penalizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penalizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenalizacioneDto: UpdatePenalizacioneDto) {
    return this.penalizacionesService.update(+id, updatePenalizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penalizacionesService.remove(+id);
  }

  @Get('obtener-penalizaciones:grado')
  public async getPenalizacionesByGrado(@Param('grado') grado: string){
    const enumGrado: grados_sancion = <grados_sancion>grado;
    return await this.penalizacionesService.findAllByGrado(enumGrado);
  }

  @Get('estudiante-cantidad/:rut')
  public async obtenerPenalizacionesByEstudiante(@Param('rut') rut: string){
    return await this.penalizacionesService.obtenerCantidadSancionesActivasPorEstudiante(rut);
  }

  @Get('activos')
  public async obtenerPenalizacionesActivas(){
    return await this.penalizacionesService.obtenerPenalizacionesActivas();
  }
}
