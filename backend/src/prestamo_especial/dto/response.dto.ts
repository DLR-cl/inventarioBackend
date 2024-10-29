import { HttpStatus } from "@nestjs/common";

export class responsePrestamoEspecial {

    message: string;
    status_code: HttpStatus;
    data: {
        id_prestamo: number,
        descripcion: string,
        motivo: string,
        id_usuario: number,
        fecha_inicio: Date,
        fecha_fin: Date
    }
 }