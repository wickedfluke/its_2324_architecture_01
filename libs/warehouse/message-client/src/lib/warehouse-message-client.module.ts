import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WAREHOUSE_MESSAGE_HOST, WAREHOUSE_MESSAGE_PORT } from '@warehouse/config';
import { WarehouseMessageClientService } from './messa-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WAREHOUSE_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        }
      },
    ])
  ],
  providers: [WarehouseMessageClientService],
  exports: [WarehouseMessageClientService]
})
export class WarehouseMessageClientModule {}
