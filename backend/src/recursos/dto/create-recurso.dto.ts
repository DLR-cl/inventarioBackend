import { IsString, IsOptional, IsInt, IsDateString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateRecursoDto {

  @IsNotEmpty()
  @IsString()
  nombre: string;
  
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
  @IsDate()
  fecha_ingreso: Date;

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
