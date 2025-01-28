import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WAREHOUSE_MESSAGE_HOST, WAREHOUSE_MESSAGE_PORT } from '@warehouse/config';
import { WarehouseMessageClientService } from './messa-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WAREHOUSE_CLIENT',
        transport: Transport.TCP,
        options: {
          host: WAREHOUSE_MESSAGE_HOST,
          port: WAREHOUSE_MESSAGE_PORT
        }
      },
    ])
  ],
  providers: [WarehouseMessageClientService],
  exports: [WarehouseMessageClientService]
})
export class WarehouseMessageClientModule {}
