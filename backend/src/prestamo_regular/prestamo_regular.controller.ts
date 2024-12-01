import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamoRegularService } from './prestamo_regular.service.js';
import { CreatePrestamoRegularDto } from './dto/create-prestamo_regular.dto.js';
import { FinPrestamoDto } from './dto/fin-prestamo-dto.js';

@Controller('prestamo-regular')
export class PrestamoRegularController {
  constructor(private readonly prestamoRegularService: PrestamoRegularService) {}

  @Post()
  create(@Body() createPrestamoRegularDto: CreatePrestamoRegularDto) {
    return this.prestamoRegularService.create(createPrestamoRegularDto);
  }

  @Get()
  findAll() {
    return this.prestamoRegularService.findAll();
  }

  @Get('/activos')
  getActivos(){
    return this.prestamoRegularService.obtenerPrestamosActivos();
  };

  
  @Get('/finalizados')
  getFinalizados(){
    return this.prestamoRegularService.obtenerPrestamosFinalizados();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoRegularService.findOne(+id);
  }

  @Patch('finalizar-prestamo')
  finalizarPrestamo(@Body() finPrestamo: FinPrestamoDto){
    return this.prestamoRegularService.finalizarPrestamo(finPrestamo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoRegularService.remove(+id);
  }
}
