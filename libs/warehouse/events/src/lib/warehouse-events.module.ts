import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WarehouseEventService } from './warehouse-event.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WAREHOUSE_EVENT_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        }
      }
    ])
  ],
  providers: [WarehouseEventService],
  exports: [WarehouseEventService],
})
export class WarehouseEventsModule {}
