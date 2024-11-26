import { IsNotEmpty, IsString } from "class-validator";

export class CreatePrestamoEspecialDto {
    
    @IsNotEmpty()
    @IsString()
    descripcion : string;

    @IsNotEmpty()
    @IsString()
<<<<<<< Updated upstream
    motivo : string
=======
    motivo : string;

    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    id_dici: string;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio: Date;

    @IsNotEmpty()
    @IsString()
    rut_estudiante: string

>>>>>>> Stashed changes
}
