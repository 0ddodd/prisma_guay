import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation pipe
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
  .setTitle('Median')
  .setDescription('The Median API')
  .setVersion('0.1')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
