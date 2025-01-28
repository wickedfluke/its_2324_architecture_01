import { clientMessageDecoratorFactory, MessagesDefinition } from "@utils/message-utils";

export class GetStockQuantityInput {
  productId!: string
}

export class GetStockQuantityResult {
  productId!: string;
  quantity!: number;
}

export const WarehouseMessageDefinitions = {
  StockQuantityMessage: {
    identifier: 'getStockQuantity',
    payloadType: GetStockQuantityInput,
    responseType: GetStockQuantityResult
  }
} satisfies MessagesDefinition;

export const WarehouseMessage = clientMessageDecoratorFactory(WarehouseMessageDefinitions, 'wh');
