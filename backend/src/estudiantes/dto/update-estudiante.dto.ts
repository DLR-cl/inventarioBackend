import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto.js';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsOptional()
    fono: string;

    @IsNumber()
    @IsOptional()
    ingreso: number;


    @IsString()
    @IsOptional()
    correo: string

    @IsBoolean()
    @IsNotEmpty()
    estado: boolean;
}
