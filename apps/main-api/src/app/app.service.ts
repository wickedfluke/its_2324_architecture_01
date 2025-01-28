import { Injectable } from '@nestjs/common';
import { WarehouseMessageClientService } from '@warehouse/message-client';


@Injectable()
export class AppService {
  constructor(protected warehouseClient: WarehouseMessageClientService) {}

  async getData() {
    console.log('sending request to warehouse');
    const result =  await this.warehouseClient.getStockQuantity({productId: 'id1'});
    console.log('received response from warehouse', result);
    return result;
  }
}
