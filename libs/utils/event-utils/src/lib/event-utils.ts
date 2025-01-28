import { applyDecorators } from "@nestjs/common";
import { EventPattern as OriginalEventPattern } from "@nestjs/microservices";

export type EventConfig<P = unknown> = {
  identifier: string,
  payloadType: new () => P
}

export interface EventsDefinition {
  [key: string]: EventConfig<unknown>;
}

type EventHandler<P, R> = (payload: P) => Promise<R>;

export type IEventPattern<T> = (
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<EventHandler<T, void>>,
) => TypedPropertyDescriptor<EventHandler<T, void>> | void

export const clientEventDecoratorFactory = (definitions: EventsDefinition, prefix: string) => {
  return <P>(event: EventConfig<P>) => {
    if (!Object.values<EventConfig>(definitions).includes(event)) {
      throw new Error('Invalid event definition')
    }
    return applyDecorators(OriginalEventPattern(`${prefix}_${event.identifier}`)) as IEventPattern<P>
  }
}
