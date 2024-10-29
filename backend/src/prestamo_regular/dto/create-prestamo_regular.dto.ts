import { IsDate, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePrestamoRegularDto {

    @IsDate()
    @IsNotEmpty()
    hora_inicio : Date;

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
