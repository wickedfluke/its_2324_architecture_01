import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ShipmentEventsDefinitions } from "./shipment-config";

@Injectable()
export class ShipmentEventService {
  constructor(@Inject('SHIPMENT_EVENT_SERVICE') private readonly shipmentClient: ClientProxy) {}

  // Method to send shipment status
  async sendShipmentStatus(orderId: string, status: ShipmentEventsDefinitions["shipmentStatus"]) {
    console.log(`🚀 Shipment Event: ${status} for order ${orderId}`);
    this.shipmentClient.emit(`shipment.${status}`, { orderId, status });
  }
}