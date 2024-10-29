import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { DatabaseService } from '../database/database/database.service';
import { Prisma, recurso } from '@prisma/client';
import { ResponseDto } from './dto/response.dto';
@Injectable()
export class RecursosService {
  constructor(private readonly databaseService : DatabaseService){}
  
  
  async create(createRecurso: CreateRecursoDto) : Promise<ResponseDto<recurso>>{
    try {
        const newRecurso = await this.databaseService.recurso.create(
          {data : createRecurso});
          
        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.CREATED,
          message: 'Recurso creado con exito',
          data: newRecurso,
        }

        return response


    } catch (error){
      throw new HttpException('Error al crear el recurso',  HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() : Promise<recurso[]>{
    return await this.databaseService.recurso.findMany();
  }

  async findOne(id: string) : Promise<recurso>{
    return await this.databaseService.recurso.findUnique({
      where : {
        id_dici: id
      }
    })
  }

  async update(id: string, updateRecurso: UpdateRecursoDto) : Promise<ResponseDto<recurso>>{
      try {
        const actRecurso = await this.databaseService.recurso.update({
          where : {id_dici : id},
          data : updateRecurso      
        }) 

        const response : ResponseDto<recurso> = {
          statusCode : HttpStatus.ACCEPTED,
          message : 'Recurso actualizado',
          data : actRecurso,
        }
        return response;

      } catch (error){
        throw new HttpException('Error al actualizar recurso', HttpStatus.BAD_REQUEST)
      }
  }
    

  async remove(id: string) : Promise<ResponseDto<recurso>>{
   try {

    if(!await this.databaseService.recurso.findUnique({
      where : { id_dici : id,}
    })) {
      throw new HttpException('Recurso a eliminar no existe', HttpStatus.BAD_REQUEST);
    }

    const deleteRecurso = await this.databaseService.recurso.delete({
      where : {id_dici : id},
    });
  
    const response : ResponseDto<recurso> = {
      statusCode : HttpStatus.OK,
      message : 'Recurso borrado con exito',
      data: deleteRecurso
    }
    return response
  } catch(error) {
    throw new HttpException('Error, no se pudo borrar el recurso', HttpStatus.BAD_REQUEST)
  }
}

  // devuelve todos los prestamos en los que aparece el recurso
  async getPrestamosRegularFromResource(id_dici: string){
    try {
      const prestamo_regular = await this.databaseService.regular.findMany({
        where:
        {
          id_dici: id_dici
        }
      });

      return prestamo_regular;
    } catch (error) {
      throw new HttpException('error al obtener todos los prestamos regulares del recurso', HttpStatus.BAD_REQUEST);
    }
  }

  async getPrestamosEspecialFromResource(id_dici: string){
    try {
      const prestamos_especial = await this.databaseService.especial.findMany({
        where: {
          id_dici: id_dici
        }
      });

      return prestamos_especial;
    } catch (error) {
      
    }
  }

  async getAllRecursosFromCategoriasActivos(id : number){
    try {
      const recursos = await this.databaseService.recurso.findMany({
        where: {
          id_categoria: id,
          estado_recurso: true,
        }
      });

      return recursos
    } catch (error){
      throw new HttpException('Error al obtener todos los recursos activos de categoria', HttpStatus.BAD_REQUEST);
    }
  }


}
