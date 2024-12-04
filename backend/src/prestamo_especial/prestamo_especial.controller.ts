import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PrestamoEspecialService } from './prestamo_especial.service.js';
import { CreatePrestamoEspecialDto } from './dto/create-prestamo_especial.dto.js';
import { UpdatePrestamoEspecialDto } from './dto/update-prestamo_especial.dto.js';

@Controller('prestamo-especial')
export class PrestamoEspecialController {
  constructor(private readonly prestamoEspecialService: PrestamoEspecialService) {}

  @Post()
  create(@Body() createPrestamoEspecialDto: CreatePrestamoEspecialDto) {
    return this.prestamoEspecialService.create(createPrestamoEspecialDto);
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.prestamoEspecialService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoEspecialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestamoEspecialDto: UpdatePrestamoEspecialDto) {
    return this.prestamoEspecialService.update(+id, updatePrestamoEspecialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoEspecialService.remove(+id);
  }
}
