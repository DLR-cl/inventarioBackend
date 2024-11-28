import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { DatabaseModule } from 'src/database/database/database.module';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports: [DatabaseModule],
  exports: [EstudiantesModule]
})
export class EstudiantesModule {}
