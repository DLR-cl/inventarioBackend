import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { promises } from 'dns';
import { ResponseDto } from '../recursos/dto/response.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  async create(@Body() createCategoria: CreateCategoriaDto) : Promise<ResponseDto<CreateCategoriaDto>> {
    return await this.categoriasService.create(createCategoria)
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id/recursos')
  getAllRecursosByCategoria(@Param('id') id: string){
    return this.categoriasService.getAllRecursoByCategoria(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
