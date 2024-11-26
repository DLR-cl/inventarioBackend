import { IsDate, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePrestamoRegularDto {

    @IsString()
    @IsNotEmpty()
    hora_inicio : string;

    @IsNotEmpty()
    @IsString()
    rut: string;

    @IsNumber()
    @IsNotEmpty()
    id_usuario : number;

    @IsString()
    @IsNotEmpty()
    id_dici : string;


}
