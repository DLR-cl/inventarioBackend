import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
import { DatabaseService } from '../database/database/database.service.js';
import { ResponseDto } from './dto/response.dto.js';
import { Categoria } from './entities/categoria.entity.js';
import { categoria, recurso} from '@prisma/client';
import { promises } from 'dns';

@Injectable()
export class CategoriasService {

  constructor(private readonly databaseService : DatabaseService){

  }

  async create(createCategoria: CreateCategoriaDto) : Promise<ResponseDto<categoria>> {
    try {

      // encontrar categoria creada
      if(!this.existeCategoriaByName(createCategoria.nombre_categoria)){
        throw new HttpException('La categoría ya existe', HttpStatus.BAD_REQUEST);
      }


      const newcategoria = await this.databaseService.categoria.create({
        data : {
          fecha_creacion : new Date(createCategoria.fecha_creacion),
          nombre_categoria : createCategoria.nombre_categoria
        },
      })

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.CREATED,
        message : 'Categoria creada con exito',
        data: newcategoria
      }
      
      return response
    }catch(error){
      throw new HttpException('Error al crear la categoria', HttpStatus.BAD_REQUEST)
    } 
  }

  async findAll() : Promise<categoria[]>{
    try {
      return await this.databaseService.categoria.findMany();
    } catch(error){
      throw new HttpException('Error al mostrar las categorias', HttpStatus.BAD_REQUEST);
    }
    
  }

  async getAllRecursoByCategoria(id: number): Promise<recurso[]>{
    try {

      const findCategoria = await this.databaseService.categoria.findUnique({
        where : { id_categoria: id },
        include: { recurso: true }
      });

      const recursos : recurso[] = findCategoria.recurso;
      return  recursos;
    } catch(error){
      throw new HttpException('Error al obtener los recursos según categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) : Promise<categoria> {
    try{
      return await this.databaseService.categoria.findUnique({
        where : {id_categoria: id}
      });
    } catch(error){
      throw new HttpException('Error al mostrar la categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateCategoria : UpdateCategoriaDto) : Promise<ResponseDto<categoria>> {
    
    try {

      if(!this.existeCategoriaById(id)){
        throw new HttpException('Error, no existe esa categoria', HttpStatus.BAD_REQUEST);
      };

      const newCategoria = await this.databaseService.categoria.update({
        where : {id_categoria : id},
        data : updateCategoria,
      });

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.OK,
        message : 'La categoria ha sido modificada con exito',
        data : newCategoria
      }

      return response;
    } catch(error){
      throw new HttpException('Error al actualizar la categoria', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) : Promise<ResponseDto<categoria>>{
    try {

      const existeCategoria = await this.existeCategoriaById(id);
      const categoriaRecursos = await this.categoriaTieneRecursos(id);

      if( !existeCategoria){
        throw new HttpException('Error, categoria no existe', HttpStatus.BAD_REQUEST);
      }

      // si la categoria aun tiene recursos
      if(categoriaRecursos){
        throw new HttpException('Error, la categoria aún tiene recursos registrados', HttpStatus.NOT_ACCEPTABLE);
      }

      // si no tiene, entonces se elimina.
      const removeCategoria = await this.databaseService.categoria.delete({
        where :{
          id_categoria : id,
        }
      });

      const response : ResponseDto<categoria> = {
        statusCode : HttpStatus.OK,
        message: 'categoria borrada con exito',
        data: removeCategoria,
      };

      return response;
      
    } catch(error){
      console.log(error);
      if(error instanceof HttpException){
        throw error;
      }else{
        throw new HttpException('Error al borrar categoria', HttpStatus.BAD_REQUEST);
      }
    }
  }

 // funciones de apoyo

  private async existeCategoriaByName(nombre_categoria: string): Promise<boolean> {

    nombre_categoria = nombre_categoria.toLowerCase()
    const categoria = await this.databaseService.categoria.findUnique({
      where: {
        nombre_categoria: nombre_categoria,
      }
    })

    if(categoria){
      return true;
    }
    return false;
  }

  
  private async existeCategoriaById(id_categoria: number): Promise<boolean> {

    const categoria = await this.databaseService.categoria.findUnique({
      where: {
        id_categoria: id_categoria,
      }
    })

    if(categoria){
      return true;
    }
    return false;
  }

  private async categoriaTieneRecursos(id_categoria: number): Promise<boolean> {
    const recursos_categoria = await this.databaseService.recurso.findMany({
      where: {
        id_categoria: id_categoria,
      }
    })
    if(recursos_categoria.length > 0){
      return true;
    }
    return false;
  }
}

