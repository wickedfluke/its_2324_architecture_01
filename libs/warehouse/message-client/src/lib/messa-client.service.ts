import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseMessageDefinitions } from "@warehouse/config";
import { lastValueFrom } from "rxjs";

@Injectable()
export class WarehouseMessageClientService {
  constructor(@Inject('WAREHOUSE_CLIENT') private client: ClientProxy) {}

  async getStockQuantity(data: GetStockQuantityInput) {
    return lastValueFrom(this.client.send<GetStockQuantityResult>(
      {cmd: `wh_${WarehouseMessageDefinitions.StockQuantityMessage.identifier}`},
      data));
  }
}
