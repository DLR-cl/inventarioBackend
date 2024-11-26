/*
  Warnings:

  - You are about to alter the column `fecha_creacion` on the `categoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_fin` on the `especial` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `especial` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `estado_estudiante` on the `estudiante` table. All the data in the column will be lost.
  - You are about to alter the column `fecha_ingreso` on the `recurso` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `rut` on the `sanciones` table. All the data in the column will be lost.
  - Added the required column `fecha_final` to the `sanciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_inicio` to the `sanciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut_estudiante` to the `sanciones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sanciones` DROP FOREIGN KEY `sanciones_ibfk_2`;

-- AlterTable
ALTER TABLE `categoria` MODIFY `fecha_creacion` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `especial` MODIFY `fecha_fin` DATETIME NULL,
    MODIFY `fecha_inicio` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` DROP COLUMN `estado_estudiante`,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `recurso` MODIFY `fecha_ingreso` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `sanciones` DROP COLUMN `rut`,
    ADD COLUMN `fecha_final` DATETIME NOT NULL,
    ADD COLUMN `fecha_inicio` DATETIME NOT NULL,
    ADD COLUMN `rut_estudiante` VARCHAR(12) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX `rut_estudiante` ON `sanciones`(`rut_estudiante`);

-- AddForeignKey
ALTER TABLE `sanciones` ADD CONSTRAINT `sanciones_ibfk_2` FOREIGN KEY (`rut_estudiante`) REFERENCES `estudiante`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;
