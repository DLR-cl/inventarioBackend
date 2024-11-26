import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
<<<<<<< Updated upstream
  const app = await NestFactory.create(AppModule, {cors : true});
  await app.listen(3306);
=======
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }
  );
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
    }
  ));
  await app.listen(3000);
>>>>>>> Stashed changes
}
bootstrap();
