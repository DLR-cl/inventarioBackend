/*
  Warnings:

  - A unique constraint covering the columns `[rut]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `usuario_rut_key` ON `usuario`(`rut`);
