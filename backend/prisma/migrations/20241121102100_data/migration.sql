/*
  Warnings:

  - You are about to drop the column `id_alumno` on the `especial` table. All the data in the column will be lost.
  - You are about to alter the column `fecha_ingreso` on the `recurso` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_final` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `estado` to the `especial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut_estudiante` to the `especial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `regular` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `especial` DROP FOREIGN KEY `especial_id_alumno_fkey`;

-- AlterTable
ALTER TABLE `especial` DROP COLUMN `id_alumno`,
    ADD COLUMN `estado` BOOLEAN NOT NULL,
    ADD COLUMN `rut_estudiante` VARCHAR(12) NOT NULL;

-- AlterTable
ALTER TABLE `recurso` MODIFY `fecha_ingreso` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `regular` ADD COLUMN `estado` BOOLEAN NOT NULL,
    MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `sanciones` MODIFY `fecha_final` DATETIME NOT NULL,
    MODIFY `fecha_inicio` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_rut_estudiante_fkey` FOREIGN KEY (`rut_estudiante`) REFERENCES `estudiante`(`rut`) ON DELETE RESTRICT ON UPDATE CASCADE;
