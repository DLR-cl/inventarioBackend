import { Module } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { RecursosController } from './recursos.controller';
import { DatabaseModule } from '../database/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RecursosController],
  providers: [RecursosService],
})
export class RecursosModule {}
