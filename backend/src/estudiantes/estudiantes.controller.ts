import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, Query } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service.js';
import { CreateEstudianteDto } from './dto/create-estudiante.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage, Multer } from 'multer';
import { CvsOrXlsxMulterEngine } from '../shared/multer/multerStorageEngine.js';
import { Worksheet } from 'exceljs';

const MAX_FILE_SIZE_IN_MiB = 1024*1024*20;
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Post('carga_masiva')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: new CvsOrXlsxMulterEngine({
        maxFileSize: MAX_FILE_SIZE_IN_MiB,
        destKey: 'worksheet',
      }),
    }),
  )
  public async masiveCreateEstudiantes(@UploadedFile() data: {worksheet: Worksheet}){
      const dataFormat = this.estudiantesService.format(data.worksheet);
      return dataFormat;
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.estudiantesService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.remove(+id);
  }
}
