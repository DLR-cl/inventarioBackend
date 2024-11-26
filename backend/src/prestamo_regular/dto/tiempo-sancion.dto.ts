import { grados_sancion } from "@prisma/client";

export class TiempoSancionDto {
    fecha_inicio: Date;
    fecha_termino: Date;
    grado_sancion: grados_sancion;
}