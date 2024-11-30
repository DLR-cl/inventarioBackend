import { Module } from '@nestjs/common';
import { RecursosService } from './recursos.service.js';
import { RecursosController } from './recursos.controller.js';
import { DatabaseModule } from '../database/database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [RecursosController],
  providers: [RecursosService],
})
export class RecursosModule {}
