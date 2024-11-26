/*
  Warnings:

  - You are about to alter the column `fecha_creacion` on the `categoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_fin` on the `especial` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `especial` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_ingreso` on the `recurso` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `estado_sancion` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `fecha_creacion` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `especial` MODIFY `fecha_fin` DATETIME NULL,
    MODIFY `fecha_inicio` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `recurso` MODIFY `fecha_ingreso` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `sanciones` MODIFY `estado_sancion` BOOLEAN NOT NULL;
