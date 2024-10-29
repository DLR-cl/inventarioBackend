import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DatabaseService } from '../database/database/database.service';
import { ResponseUsuariosDto } from './dto/response.dto';
import { Prisma, roles, usuario } from '@prisma/client';
import { promises } from 'dns';
import { TiposUsuario } from './enums/tiposUsuarios.enum';
import { error } from 'console';

@Injectable()
export class UsuariosService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createUsuario: CreateUsuarioDto) : Promise<ResponseUsuariosDto>{
    try {
      
      if(!this.userExists(createUsuario.rut)){
        throw new HttpException('Usuario ya existente', HttpStatus.BAD_REQUEST);
      }

      const user = await this.databaseService.usuario.create({data: createUsuario});

      const { password:_, ...userWithoutPassword } = user;

      const response: ResponseUsuariosDto = {
        message: 'Usuario creado con exito',
        statusCode: HttpStatus.OK,
        data: userWithoutPassword
      }

      return response;

    } catch(error){
      throw new HttpException('Error al crear usuario', HttpStatus.BAD_REQUEST);
    }
  }


  async findAll() {
    try {
      return await this.databaseService.usuario.findMany();
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
