import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WAREHOUSE_MESSAGE_HOST, WAREHOUSE_MESSAGE_PORT } from '@warehouse/config'
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
