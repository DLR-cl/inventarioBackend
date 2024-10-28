import { IsNotEmpty, IsString } from "class-validator";

export class AuthPayloadDto{
    
    @IsString()
    @IsNotEmpty()
    rut: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}