import { IsNotEmpty, IsNumber } from 'class-validator';

export class FinPrestamoEspecialDto {
  @IsNumber()
  @IsNotEmpty()
  id_prestamo: number;
}
