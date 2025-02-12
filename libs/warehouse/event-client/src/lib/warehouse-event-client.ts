import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { clientEventDecoratorFactory } from "@utils/event-utils";
import { WarehouseEventsDefinitions } from "@warehouse/config";

export const getWarehouseEventConfig = (): MicroserviceOptions => {
  return {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379
    }
  }
}

export const WarehouseEvent = clientEventDecoratorFactory(WarehouseEventsDefinitions, 'wh');
