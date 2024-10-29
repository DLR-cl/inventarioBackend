import { IsBoolean, IsEnum, isNotEmpty, IsNotEmpty, IsString } from "class-validator";
import { TiposUsuario } from "../enums/tiposUsuarios.enum";
import { roles } from "@prisma/client";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombre : string;

    @IsString()
    @IsNotEmpty()
    usuario : string

    @IsString()
    @IsNotEmpty()
    correo : string;

    @IsString()
    @IsNotEmpty()
    password : string

    @IsString()
    @IsNotEmpty()
    rut : string;

    @IsEnum(roles)
    @IsNotEmpty()
    rol : roles;
}
