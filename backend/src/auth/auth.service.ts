import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { usuario } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { jwtConstant } from './lib/jwt-constants.js';
import { access } from 'fs';
import { compare } from './lib/bcrypt.js';

@Injectable()
export class AuthService {

    constructor(
        private readonly dataBaseService: DatabaseService,
        private readonly _jwtService: JwtService,
    ){

    }



    public async validateUser(authPayload: AuthPayloadDto){
        try {
            // definir si existe usuario
            if(!this.existeUsuario(authPayload.correo)){
                throw new BadRequestException('Usuario no existente');
            }
            
            const usuario: usuario = await this.dataBaseService.usuario.findFirstOrThrow({
                where: {
                    correo: authPayload.correo,
                },
            });

            const comp = await compare(authPayload.password, usuario.password);

            if(!comp){
                // retorna error
                throw new UnauthorizedException('Contraseña o Correo no válidos');
            };

            const { password: _, ...userWithoutPassword } = usuario;
            const payload = {...userWithoutPassword};
            
            const access_token = await this._jwtService.signAsync(payload, {expiresIn: '12h'})
            
            return { access_token };    
            
            
        } catch(error){
            console.log(error);
            if(error instanceof BadRequestException){
                throw error;
            }else if(error instanceof UnauthorizedException){
                throw error;
            }

            throw new InternalServerErrorException('Error interno al validar el usuario');
        }
    }


    // funciones de apoyo 
    private async existeUsuario(correo: string): Promise<boolean> {
        const usuario  = await this.dataBaseService.usuario.findFirstOrThrow({
            where: {
                correo: correo,
            }
        });

        if(!usuario){
            return false;
        }
        return true;
    }
}
