/*
  Warnings:

  - You are about to drop the column `nombre` on the `recurso` table. All the data in the column will be lost.
  - You are about to alter the column `fecha_ingreso` on the `recurso` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_final` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `color` to the `recurso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recurso` DROP COLUMN `nombre`,
    ADD COLUMN `color` VARCHAR(200) NOT NULL,
    MODIFY `fecha_ingreso` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `sanciones` MODIFY `fecha_final` DATETIME NOT NULL,
    MODIFY `fecha_inicio` DATETIME NOT NULL;
