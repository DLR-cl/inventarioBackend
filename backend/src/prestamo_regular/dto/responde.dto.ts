import { HttpStatus } from "@nestjs/common";
import { regular } from "@prisma/client";

export class responsePrestamoRegular {
    message: string;
    status: HttpStatus;
    data: regular;
}