import { Module } from '@nestjs/common';
import { PrestamoEspecialService } from './prestamo_especial.service';
import { PrestamoEspecialController } from './prestamo_especial.controller';
import { RecursosService } from 'src/recursos/recursos.service';
import { DatabaseService } from 'src/database/database/database.service';

@Module({
  controllers: [PrestamoEspecialController],
  providers: [PrestamoEspecialService, DatabaseService],
})
export class PrestamoEspecialModule {}
