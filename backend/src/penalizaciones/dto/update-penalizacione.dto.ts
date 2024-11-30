import { PartialType } from '@nestjs/mapped-types';
import { CreatePenalizacioneDto } from './create-penalizacione.dto.js';

export class UpdatePenalizacioneDto extends PartialType(CreatePenalizacioneDto) {}
