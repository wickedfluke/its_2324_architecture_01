import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from "@nestjs/microservices";
import { ShipmentEventService } from '@2324-architecture-01/Shipment';
@Controller()
export class AppController {
  constructor(private readonly shipmentService: ShipmentEventService) {}

  @EventPattern('warehouse.shipment.status')
  async handleWarehouseEvent(@Payload() data: { orderId: string; status: string }) {
    console.log(`📦 Warehouse Event Received: ${data.status} for Order ${data.orderId}`);

    if (data.status === 'items_ready') {
      // 1. Inizio spedizione
      await this.shipmentService.sendShipmentStatus(data.orderId, 'shipment.start');

      // 2. Simuliamo il tempo di spedizione
      setTimeout(async () => {
        await this.shipmentService.sendShipmentStatus(data.orderId, 'shipment.shipped');
      }, 3000);

      // 3. Simuliamo la consegna dopo 5 secondi
      setTimeout(async () => {
        await this.shipmentService.sendShipmentStatus(data.orderId, 'shipment.delivered');
      }, 8000);
    }
  }
}
