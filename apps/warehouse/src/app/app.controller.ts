import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseMessage, WarehouseMessageDefinitions } from '@warehouse/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @WarehouseMessage(WarehouseMessageDefinitions.StockQuantityMessage)
  async getData(payload: GetStockQuantityInput): Promise<GetStockQuantityResult> {
    const { productId } = payload;
    const quantity = await this.appService.getStockById('asd');
    return {
      productId,
      quantity
    };
  }
}
