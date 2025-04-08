import { IsNotEmpty, IsString } from "class-validator";

export class ResetPassDto {

    @IsNotEmpty()
    @IsString()
    rut: string;
}