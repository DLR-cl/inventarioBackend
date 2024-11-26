import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './lib/jwt-constants';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: {expiresIn: '12h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
