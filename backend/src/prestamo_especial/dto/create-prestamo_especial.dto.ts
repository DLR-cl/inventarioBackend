import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePrestamoEspecialDto {
    
    @IsNotEmpty()
    @IsString()
    descripcion : string;

    @IsNotEmpty()
    @IsString()
    motivo : string;

    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    id_dici: string;

    @IsNotEmpty()
    @IsString()
    fecha_inicio: string;

    @IsNotEmpty()
    @IsString()
    fecha_fin: string;

    @IsNotEmpty()
    @IsString()
    rut_estudiante: string

}
