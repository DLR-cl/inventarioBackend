import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePenalizacioneDto {

    @IsNotEmpty()
    @IsNumber()
    grado: number;
    
    @IsNotEmpty()
    @IsNumber()
    id_sanciones: number; 

    @IsNotEmpty()
    @IsString()
    comentario: string;

    @IsNotEmpty()
    @IsString()
    estado_sancion: string;

    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    rut: string;
}
