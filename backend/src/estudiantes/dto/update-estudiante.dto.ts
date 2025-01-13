import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto.js';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
  @IsBoolean()
  @IsOptional()
  estado: boolean;
}
