import { IsNotEmpty, IsString } from "class-validator";

export class AuthPayloadDto{
    
    @IsString()
    @IsNotEmpty()
    correo: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}