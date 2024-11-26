import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursosModule } from './recursos/recursos.module';
import { DatabaseModule } from './database/database/database.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrestamoRegularModule } from './prestamo_regular/prestamo_regular.module';
import { PrestamoEspecialModule } from './prestamo_especial/prestamo_especial.module';
import { PenalizacionesModule } from './penalizaciones/penalizaciones.module';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    RecursosModule, DatabaseModule, CategoriasModule, EstudiantesModule, UsuariosModule, PrestamoRegularModule, PrestamoEspecialModule, PenalizacionesModule, AuthModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
