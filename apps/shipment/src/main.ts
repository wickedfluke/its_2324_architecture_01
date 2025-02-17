import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';
import { ShipmentEventService } from '@2324-architecture-01/Shipment';
import { ShipmentEventHandler } from './app/shipment-handler';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  await app.listen()
  console.log('🚚 Shipment Microservice Started');
  const shipmentEventService = app.get(ShipmentEventService);

  await shipmentEventService.sendShipmentStatus('order111', 'shipment.start');
  await shipmentEventService.sendShipmentStatus('order222', 'shipment.shipped');
  await shipmentEventService.sendShipmentStatus('order333', 'shipment.delivered');

  ;
}

bootstrap();
