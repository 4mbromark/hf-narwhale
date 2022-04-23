import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('/nw-cs');
  // app.use(express.static('../hf-narwhale-creator-client/dist/hf-narwhale-creator-client'));
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,SET',
    allowedHeaders: 'Access-Control-Allow-Origin'
  });
  await app.listen(PORT);
}
bootstrap();
