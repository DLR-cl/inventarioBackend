import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNotEmpty, isNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}

export class ChangePassword {

    @IsNotEmpty()
    @IsNumber()
    usuario_id: number;

    @IsNotEmpty()
    @IsString()
    old_password: string;

    @IsNotEmpty()
    @IsString()
    new_password: string;
}