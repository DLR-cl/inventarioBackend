/*
  Warnings:

  - Made the column `fecha_creacion` on table `categoria` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `fecha_creacion` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `prestamo` MODIFY `fecha_inicio` DATETIME NOT NULL,
    MODIFY `fecha_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `recurso` MODIFY `fecha_ingreso` DATETIME NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;
