import { roles } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    usuario: string;

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    rut: string

    @IsNotEmpty()
    @IsEnum(roles)
    rol: roles
}