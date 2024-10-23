import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { PenalizacionesService } from '../penalizaciones/penalizaciones.service';

@Module({
  controllers: [PrestamosController],
  providers: [PrestamosService, PenalizacionesService],
})
export class PrestamosModule {}
