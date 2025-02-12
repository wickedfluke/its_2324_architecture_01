import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentEventsModule } from './../../../../libs/shipment/src/lib/shipment-events.module';
import { ShipmentEventHandler } from './shipment-handler';

@Module({
  imports: [ShipmentEventsModule],
  controllers: [AppController],
  providers: [ShipmentEventHandler],
})
export class AppModule {}
