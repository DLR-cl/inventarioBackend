/*
  Warnings:

  - You are about to alter the column `fecha_ingreso` on the `recurso` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_final` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `fecha_inicio` on the `sanciones` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `id_alumno` to the `especial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` MODIFY `fecha_creacion` DATE NOT NULL;

-- AlterTable
ALTER TABLE `especial` ADD COLUMN `id_alumno` VARCHAR(12) NOT NULL,
    MODIFY `fecha_fin` DATE NULL,
    MODIFY `fecha_inicio` DATE NOT NULL;

-- AlterTable
ALTER TABLE `recurso` MODIFY `fecha_ingreso` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL;

-- AlterTable
ALTER TABLE `sanciones` MODIFY `fecha_final` DATETIME NOT NULL,
    MODIFY `fecha_inicio` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_id_alumno_fkey` FOREIGN KEY (`id_alumno`) REFERENCES `estudiante`(`rut`) ON DELETE RESTRICT ON UPDATE CASCADE;
