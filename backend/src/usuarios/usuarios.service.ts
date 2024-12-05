import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { ResponseUsuariosDto } from './dto/response.dto.js';
import { Prisma, roles, usuario } from '@prisma/client';
import { promises } from 'dns';
import { TiposUsuario } from './enums/tiposUsuarios.enum.js';
import { error } from 'console';
import { compare, encrypt } from '../auth/lib/bcrypt.js';

@Injectable()
export class UsuariosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createUsuario: CreateUsuarioDto) : Promise<ResponseUsuariosDto>{
    try {
      
      if(await this.userExists(createUsuario.rut)){
        throw new BadRequestException('Usuario ya existente');
      }

      const firstDigits = createUsuario.rut.replaceAll('.', '').split('-')[0];

      console.log(firstDigits)
      const hashedPassword = await encrypt(firstDigits);
      const user = await this.databaseService.usuario.create({data: 
        {...createUsuario,
          password: hashedPassword,
        }});

      const { password:_, ...userWithoutPassword } = user;

      const response: ResponseUsuariosDto = {
        message: 'Usuario creado con exito',
        statusCode: HttpStatus.OK,
        data: userWithoutPassword
      }

      return response;

    } catch(error){
      console.log(error);
      if(error instanceof BadRequestException){
        throw error;
      }else{
        throw new InternalServerErrorException('Error interno al crear usuario');
      }
    }
  }

  public async changePassword(id_user: number, old_password: string, new_password: string){
    try {

      const verify_user = await this.databaseService.usuario.findUnique({
        where: {
          id_usuario: id_user
        }
      });

      if(!verify_user){
        throw new BadRequestException('No existe usuario');
      }


      const isAuthorized = await compare(old_password, verify_user.password);

      if(!isAuthorized){
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      const hashedPassword = await encrypt(new_password);
      const changePasswordUser = await this.databaseService.usuario.update({
        where: {
          id_usuario: id_user,
        },
        data: {
          password: hashedPassword,
        }
      });

      const response: ResponseUsuariosDto = {
        message: 'Usuario contraseña actualizada',
        statusCode: HttpStatus.OK,
        data: { ...changePasswordUser }
      }

      return response;
    } catch (error) {
      if(error instanceof UnauthorizedException){
        throw error;
      }else if(error instanceof BadRequestException){
        throw error;
      }
      throw new InternalServerErrorException('Error interno al cambiar la contraseña')
    }
  }


  
  async findAll(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;
  
    // Total de registros
    const totalRecords = await this.databaseService.usuario.count();
  
    // Calcular total de páginas
    const totalPages = Math.ceil(totalRecords / limit);
  
    // Recuperar registros con paginación
    const data = await this.databaseService.usuario.findMany({
      skip,
      take: +limit,
    });
  
    return {
      data,
      totalPages,
      totalRecords,
      currentPage: page,
    };
    }catch(error){
      throw new HttpException('Error al cargar todos los usuarios', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id_user: number) {
    try{
        return await this.databaseService.usuario.findUnique({
          where : {
            id_usuario : id_user,
          }
        })
      }
      catch(error){
        throw new HttpException('Error al obtener el usuario', HttpStatus.BAD_REQUEST)
      }
    }
  

  async update(id_user: number, updateUsuario: UpdateUsuarioDto) : Promise<ResponseUsuariosDto> {
    try {
      const actUsuario = await this.databaseService.usuario.update(
        {
          where: {id_usuario : id_user},
          data: updateUsuario
        }
      )

      const { password:_, ...userWithoutPassword } = actUsuario;
      const response : ResponseUsuariosDto = {
        statusCode : HttpStatus.OK,
        message : 'Usuario actualizado',
        data : userWithoutPassword,
      }

      return response
    }catch(error){
      throw new HttpException('Error al actualizar el usuario', HttpStatus.BAD_REQUEST)
    }
  }

  async remove(rut: string) {
    try {

      if(!this.userExists(rut)){
        throw new HttpException('Usuario no existe', HttpStatus.BAD_REQUEST);
      }
    
      // remover usuario
      const removeUser = await this.databaseService.usuario.delete({
        where : {rut : rut}
      })

      const response = {
        statusCode : HttpStatus.OK,
        message : 'Usuario eliminado con exito',
        data : removeUser
      }

      return response;
    } catch(error){
      throw new HttpException('Error al borrar el usuario', HttpStatus.BAD_REQUEST);
    }
  }

  async verAyudantes() : Promise<usuario[]> {

    try{
      const manyAyudantes : usuario[] =  await this.databaseService.usuario.findMany({
        where:{
          rol: roles.AYUDANTE
        }
      })
  
      return manyAyudantes;
    } catch(error){
      throw new HttpException('Error obtener ayudantes', HttpStatus.BAD_REQUEST);
    }
  }

  private async userExists(rut: string){
    
    const user = await this.databaseService.usuario.findUnique(
      {where : { rut: rut}}
    );

    if(!user){
      return false;
    };
    return true;
  }


}
