import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundExceptionFilter } from './exception-filters/prisma-not-found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJs API Rest')
    .setDescription('The NestJS description')
    .setVersion('1.0')
    .addTag('categories')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422
  }));
  app.useGlobalFilters(new PrismaNotFoundExceptionFilter());

  await app.listen(3000);
}
bootstrap();
