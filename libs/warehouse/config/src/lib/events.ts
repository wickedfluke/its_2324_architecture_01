import { clientEventDecoratorFactory, EventsDefinition } from '@utils/event-utils';

export class TestPayload {
  productId!: string;
}

export const WarehouseEventsDefinitions = {
  TestWarehouseEvent: {
    identifier: 'test',
    payloadType: TestPayload
  }
} satisfies EventsDefinition;
