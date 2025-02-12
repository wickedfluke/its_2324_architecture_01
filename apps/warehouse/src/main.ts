/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { WAREHOUSE_MESSAGE_PORT } from '@warehouse/config';

console.log(WAREHOUSE_MESSAGE_PORT);
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379
      }
    },
  );
  await app.listen();
}

bootstrap();
