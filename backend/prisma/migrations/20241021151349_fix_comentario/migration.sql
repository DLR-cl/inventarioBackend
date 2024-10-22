/*
  Warnings:

  - Made the column `comentario` on table `sanciones` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `sanciones` MODIFY `comentario` VARCHAR(1000) NOT NULL;
