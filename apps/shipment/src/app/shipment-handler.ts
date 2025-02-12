import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ShipmentEventHandler {
  
  @EventPattern('shipment.start')
  handleShipmentStart(@Payload() data: any) {
    console.log(`📦 Shipment Started:`, data);
  }

  @EventPattern('shipment.shipped')
  handleShipmentShipped(@Payload() data: any) {
    console.log(`🚛 Shipment Shipped:`, data);
  }

  @EventPattern('shipment.delivered')
  handleShipmentDelivered(@Payload() data: any) {
    console.log(`🎁 Shipment Delivered:`, data);
  }
}
