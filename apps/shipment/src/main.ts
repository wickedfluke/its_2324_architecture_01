import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';
import { ShipmentEventService } from '@2324-architecture-01/Shipment';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });

  const shipmentEventService = app.get(ShipmentEventService);

  console.log('🚚 Shipment Microservice Started');
  await shipmentEventService.sendShipmentStatus('order111', 'shipment_start');
  await shipmentEventService.sendShipmentStatus('order222', 'shipment_shipped');
  await shipmentEventService.sendShipmentStatus('order333', 'shipment_delivered');

  await app.listen();
}

bootstrap();
