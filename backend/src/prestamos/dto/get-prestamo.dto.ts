import { recurso } from "@prisma/client";
import { IsDate, isDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class GetPrestamo {

    @IsNotEmpty()
    @IsNumber()
    id_prestamo: number;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio: Date;

    @IsOptional()
    @IsDate()
    fecha_fin: Date;

    @IsNotEmpty()
    @IsString()
    id_dici: string;

    @IsNotEmpty()
    recursos: recurso[]

}