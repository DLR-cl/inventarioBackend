/*
  Warnings:

  - Added the required column `nombre` to the `recurso` table without a default value. This is not possible if the table is not empty.
  - Made the column `rut` on table `regular` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_usuario` on table `regular` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `regular` DROP FOREIGN KEY `regular_ibfk_2`;

-- DropForeignKey
ALTER TABLE `regular` DROP FOREIGN KEY `regular_ibfk_3`;

-- AlterTable
ALTER TABLE `recurso` ADD COLUMN `nombre` VARCHAR(200) NOT NULL,
    MODIFY `id_uta` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `regular` MODIFY `rut` VARCHAR(12) NOT NULL,
    MODIFY `id_usuario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_2` FOREIGN KEY (`rut`) REFERENCES `estudiante`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `ayudante`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
