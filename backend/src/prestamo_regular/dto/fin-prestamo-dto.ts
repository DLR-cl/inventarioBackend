import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class FinPrestamoDto {

    @IsNotEmpty()
    @IsNumber()
    id_prestamo: number;

    @IsNotEmpty()
    @IsDateString()
    fecha_fin: Date;
}