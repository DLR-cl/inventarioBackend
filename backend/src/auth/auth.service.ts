import { BadRequestException, HttpException, HttpStatus, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
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
            if(!this.existeUsuario(authPayload.rut)){
                throw new HttpException('El usuario no existe', HttpStatus.NOT_FOUND);
            }
            
            const usuario: usuario = await this.dataBaseService.usuario.findUnique({
                where: {
                    rut: authPayload.rut,
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
            Logger.error(error.message);
            throw new HttpException('Error al validar el usuario', HttpStatus.BAD_REQUEST);
        }
    }


    // funciones de apoyo 
    private async existeUsuario(rut_usuario: string): Promise<boolean> {
        const usuario  = await this.dataBaseService.usuario.findUnique({
            where: {
                rut: rut_usuario,
            }
        });

        if(!usuario){
            return false;
        }
        return true;
    }
}
