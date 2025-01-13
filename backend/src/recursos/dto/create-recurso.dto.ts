import {
  IsString,
  IsOptional,
  IsInt,
  IsDateString,
  IsNotEmpty,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateRecursoDto {
  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  modelo?: string;

  @IsNotEmpty()
  @IsString()
  fecha_ingreso: string;

  @IsNotEmpty()
  @IsNumber()
  id_categoria: number;

  @IsNotEmpty()
  @IsString()
  id_dici: string;

  @IsOptional()
  @IsString()
  id_uta?: string;

  @IsOptional()
  @IsString()
  ubicacion?: string;
}
