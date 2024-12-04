import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service.js';
import { StatisticsController } from './statistics.controller.js';
import { DatabaseModule } from '../database/database/database.module.js';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService,DatabaseModule],
})
export class StatisticsModule {}
