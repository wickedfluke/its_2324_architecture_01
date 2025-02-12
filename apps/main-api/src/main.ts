/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { WAREHOUSE_MESSAGE_PORT } from '@warehouse/config';
import { getWarehouseEventConfig } from '@warehouse/event-client';
console.log(WAREHOUSE_MESSAGE_PORT)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice(getWarehouseEventConfig())
  await app.startAllMicroservices();

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
