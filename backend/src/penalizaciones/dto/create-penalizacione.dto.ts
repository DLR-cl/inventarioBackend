import { grados_sancion } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsBoolean} from "class-validator";

export class CreatePenalizacioneDto {

    @IsNotEmpty()
    @IsNumber()
    grado: number;
    
    @IsNotEmpty()
    @IsEnum(grados_sancion)
    id_sanciones: grados_sancion; 

    @IsNotEmpty()
    @IsString()
    comentario: string;

    @IsNotEmpty()
    @IsBoolean()
    estado_sancion: boolean;

    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    rut: string;
}
