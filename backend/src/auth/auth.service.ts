import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { DatabaseService } from '../database/database/database.service';
import { usuario } from '@prisma/client';

@Injectable()
export class AuthService {

    constructor( private readonly dataBaseService: DatabaseService){

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

            if(!(usuario.password == authPayload.password)){
                // retorna error
            }

            

        } catch(error){
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
