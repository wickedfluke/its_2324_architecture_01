import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WarehouseEvent } from '@warehouse/event-client';
import { TestPayload, WarehouseEventsDefinitions } from '@warehouse/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    const stock = await this.appService.getData();
    return {qty: stock.quantity};
  }


  @WarehouseEvent(WarehouseEventsDefinitions.TestWarehouseEvent)
  async function(payload: TestPayload) {
    console.log('event received', payload);
  }
}
