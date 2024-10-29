import { Module } from '@nestjs/common';
import { PrestamoEspecialService } from './prestamo_especial.service';
import { PrestamoEspecialController } from './prestamo_especial.controller';
import { DatabaseService } from '../database/database/database.service';

@Module({
  controllers: [PrestamoEspecialController],
  providers: [PrestamoEspecialService, DatabaseService],
})
export class PrestamoEspecialModule {}
