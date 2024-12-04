import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RecursosModule } from './recursos/recursos.module.js';
import { DatabaseModule } from './database/database/database.module.js';
import { CategoriasModule } from './categorias/categorias.module.js';
import { EstudiantesModule } from './estudiantes/estudiantes.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { PrestamoRegularModule } from './prestamo_regular/prestamo_regular.module.js';
import { PrestamoEspecialModule } from './prestamo_especial/prestamo_especial.module.js';
import { PenalizacionesModule } from './penalizaciones/penalizaciones.module.js';
import { AuthModule } from './auth/auth.module.js';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { StatisticsModule } from './statistics/statistics.module.js';


@Module({
  imports: [
    RecursosModule, DatabaseModule, CategoriasModule, EstudiantesModule, UsuariosModule, PrestamoRegularModule, PrestamoEspecialModule, PenalizacionesModule, AuthModule,
    ScheduleModule.forRoot(),
    StatisticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
