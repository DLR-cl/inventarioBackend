import { IsNotEmpty, IsNumber, isNumber, IsString, IsDate } from "class-validator";

export class CreateCategoriaDto {



    @IsString()
    @IsNotEmpty()
    nombre_categoria : string;

    @IsDate()
    @IsNotEmpty()
    fecha_creacion : Date;
}
