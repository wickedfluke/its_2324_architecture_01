import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseMessage, WarehouseMessageDefinitions } from '@warehouse/config';
import { WarehouseEventService } from '@warehouse/events';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly eventSrv: WarehouseEventService
  ) {}

  @WarehouseMessage(WarehouseMessageDefinitions.StockQuantityMessage)
  async getData(payload: GetStockQuantityInput): Promise<GetStockQuantityResult> {
    const { productId } = payload;
    const quantity = await this.appService.getStockById('asd');

    setTimeout(() => {
      this.eventSrv.sendStatusChange({productId: '1234'});
    }, 2000);

    return {
      productId,
      quantity
    };
  }
}
