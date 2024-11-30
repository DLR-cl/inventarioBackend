import { Module } from '@nestjs/common';
import { PrestamoEspecialService } from './prestamo_especial.service.js';
import { PrestamoEspecialController } from './prestamo_especial.controller.js';
import { DatabaseService } from '../database/database/database.service.js';

@Module({
  controllers: [PrestamoEspecialController],
  providers: [PrestamoEspecialService, DatabaseService],
})
export class PrestamoEspecialModule {}
