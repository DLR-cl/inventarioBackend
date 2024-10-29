import { roles, usuario } from "@prisma/client";

export class ResponseUsuariosDto {
    statusCode: number;
    message: string;
    data: {
      id_usuario: number,
      nombre: string,
      usuario: string,
      correo: string,
      rut: string,
      rol: roles
    };  
  }