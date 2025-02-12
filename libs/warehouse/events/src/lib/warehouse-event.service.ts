import { TestPayload, WarehouseEventsDefinitions } from '@warehouse/config';
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class WarehouseEventService {
  constructor(@Inject('WAREHOUSE_EVENT_SERVICE') protected warehouseClient: ClientProxy) {}

  sendStatusChange(payload: TestPayload){
    this.warehouseClient.emit(`wh_test`, payload);
  }
}
