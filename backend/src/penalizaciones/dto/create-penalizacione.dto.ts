import { grados_sancion } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsBoolean} from "class-validator";

export class CreatePenalizacioneDto {

    @IsNotEmpty()
    @IsEnum(grados_sancion)
    grado: grados_sancion;
    
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
    rut_estudiante: string;
}
