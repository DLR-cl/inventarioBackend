import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
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
  ) {}

  public async validateUser(authPayload: AuthPayloadDto) {
    try {
      const usuarioExiste = await this.existeUsuario(authPayload.correo);
      if (!usuarioExiste) {
        throw new HttpException(
          'El usuario con el correo especificado no existe.',
          HttpStatus.BAD_REQUEST,
        );
      }

      const usuario = await this.dataBaseService.usuario.findFirstOrThrow({
        where: {
          correo: authPayload.correo,
        },
      });

      const passwordCorrecta = await compare(
        authPayload.password,
        usuario.password,
      );
      if (!passwordCorrecta) {
        throw new HttpException(
          'La contraseña es incorrecta.',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const { password: _, ...userWithoutPassword } = usuario;
      const payload = { ...userWithoutPassword };

      const access_token = await this._jwtService.signAsync(payload, {
        expiresIn: '12h',
      });

      return { access_token };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.log(error)

      throw new InternalServerErrorException(
        'Ocurrió un error inesperado al validar el usuario.',
      );
    }
  }
  // funciones de apoyo
  private async existeUsuario(correo: string): Promise<boolean> {
    const usuario = await this.dataBaseService.usuario.findFirst({
      where: {
        correo: correo,
      },
    });

    if (!usuario) {
      return false;
    }
    return true;
  }
}
