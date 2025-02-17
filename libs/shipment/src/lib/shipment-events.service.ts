import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ShipmentEventsDefinitions } from "./shipment-config";

@Injectable()
export class ShipmentEventService {
  constructor(@Inject('SHIPMENT_EVENT_SERVICE') private readonly shipmentClient: ClientProxy) {}

  async sendShipmentStatus(orderId: string, status: ShipmentEventsDefinitions["shipmentStatus"]) {
    this.shipmentClient.emit(status, { orderId, status });
  }
}