import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseMessageClientModule } from '@warehouse/message-client';
import { ShipmentEventService } from '@2324-architecture-01/Shipment';
@Module({
  imports: [
    WarehouseMessageClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
