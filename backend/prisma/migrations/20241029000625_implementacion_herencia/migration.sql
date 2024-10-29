/*
  Warnings:

  - You are about to alter the column `fecha_creacion` on the `categoria` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `hora_fin` on the `regular` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ayudante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prestamo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fecha_inicio` to the `especial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_dici` to the `especial` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_usuario` on table `especial` required. This step will fail if there are existing NULL values in that column.
  - Made the column `correo` on table `estudiante` required. This step will fail if there are existing NULL values in that column.
  - Made the column `direccion` on table `estudiante` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fono` on table `estudiante` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ingreso` on table `estudiante` required. This step will fail if there are existing NULL values in that column.
  - Made the column `estado_estudiante` on table `estudiante` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marca` on table `recurso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_ingreso` on table `recurso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_categoria` on table `recurso` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id_dici` to the `regular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rol` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `admin_ibfk_1`;

-- DropForeignKey
ALTER TABLE `ayudante` DROP FOREIGN KEY `ayudante_ibfk_1`;

-- DropForeignKey
ALTER TABLE `especial` DROP FOREIGN KEY `especial_ibfk_1`;

-- DropForeignKey
ALTER TABLE `especial` DROP FOREIGN KEY `especial_ibfk_2`;

-- DropForeignKey
ALTER TABLE `prestamo` DROP FOREIGN KEY `prestamo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `recurso` DROP FOREIGN KEY `recurso_ibfk_1`;

-- DropForeignKey
ALTER TABLE `regular` DROP FOREIGN KEY `regular_ibfk_1`;

-- DropForeignKey
ALTER TABLE `regular` DROP FOREIGN KEY `regular_ibfk_3`;

-- AlterTable
ALTER TABLE `categoria` MODIFY `fecha_creacion` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `especial` ADD COLUMN `fecha_fin` DATETIME NULL,
    ADD COLUMN `fecha_inicio` DATETIME NOT NULL,
    ADD COLUMN `id_dici` VARCHAR(30) NOT NULL,
    MODIFY `id_prestamo` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_usuario` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `estudiante` MODIFY `correo` VARCHAR(50) NOT NULL,
    MODIFY `direccion` VARCHAR(60) NOT NULL,
    MODIFY `fono` VARCHAR(9) NOT NULL,
    MODIFY `ingreso` INTEGER NOT NULL,
    MODIFY `estado_estudiante` VARCHAR(9) NOT NULL;

-- AlterTable
ALTER TABLE `recurso` MODIFY `marca` VARCHAR(50) NOT NULL,
    MODIFY `fecha_ingreso` DATETIME NOT NULL,
    MODIFY `id_categoria` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `regular` ADD COLUMN `id_dici` VARCHAR(30) NOT NULL,
    MODIFY `hora_inicio` DATETIME NOT NULL,
    MODIFY `hora_fin` DATETIME NULL,
    MODIFY `id_prestamo` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `rol` ENUM('AYUDANTE', 'ADMIN') NOT NULL;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `ayudante`;

-- DropTable
DROP TABLE `prestamo`;

-- CreateIndex
CREATE INDEX `id_dici` ON `especial`(`id_dici`);

-- CreateIndex
CREATE INDEX `id_dici` ON `regular`(`id_dici`);

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_ibfk_3` FOREIGN KEY (`id_dici`) REFERENCES `recurso`(`id_dici`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_1` FOREIGN KEY (`id_dici`) REFERENCES `recurso`(`id_dici`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recurso` ADD CONSTRAINT `recurso_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
