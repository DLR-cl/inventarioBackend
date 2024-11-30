import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service.js';
import { EstudiantesController } from './estudiantes.controller.js';
import { DatabaseModule } from '../database/database/database.module.js';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports: [DatabaseModule,
    MulterModule.register({
      dest: './uploads',
    })
  ],
  exports: [EstudiantesService]
})
export class EstudiantesModule {}
