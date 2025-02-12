import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ShipmentEventService } from './shipment-events.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SHIPMENT_EVENT_SERVICE',
                transport: Transport.REDIS,
                options: {
                    host: 'localhost',
                    port: 6379
                }
            }
        ])
    ],
    providers: [ShipmentEventService],
    exports: [ShipmentEventService],
})
export class ShipmentEventsModule { }