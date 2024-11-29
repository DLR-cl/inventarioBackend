import { Module } from '@nestjs/common';
import { PrestamoRegularService } from './prestamo_regular.service';
import { PrestamoRegularController } from './prestamo_regular.controller';
import { DatabaseModule } from 'src/database/database/database.module';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';

@Module({
  controllers: [PrestamoRegularController],
  providers: [PrestamoRegularService],
  imports: [DatabaseModule, EstudiantesModule],
})
export class PrestamoRegularModule {}
