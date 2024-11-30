import { Module } from '@nestjs/common';
import { PrestamoRegularService } from './prestamo_regular.service.js';
import { PrestamoRegularController } from './prestamo_regular.controller.js';
import { DatabaseModule } from '../database/database/database.module.js';
import { EstudiantesModule } from '../estudiantes/estudiantes.module.js';

@Module({
  controllers: [PrestamoRegularController],
  providers: [PrestamoRegularService],
  imports: [DatabaseModule, EstudiantesModule],
})
export class PrestamoRegularModule {}
