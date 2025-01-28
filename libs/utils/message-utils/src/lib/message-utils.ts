import { applyDecorators } from "@nestjs/common";
import { MessagePattern as OriginalMessagePattern } from "@nestjs/microservices";

export type MessageConfig<P = unknown, R = unknown> = {
  identifier: string,
  payloadType: new () => P,
  responseType: new () => R
}

export interface MessagesDefinition {
  [key: string]: MessageConfig;
}

type EventHandler<P, R> = (payload: P) => Promise<R>;

export type IMessagePattern<T, R> = (
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<EventHandler<T, R>>,
) => TypedPropertyDescriptor<EventHandler<T, R>>

export const clientMessageDecoratorFactory = (definitions: MessagesDefinition, prefix: string) => {
  return <P, R>(event: MessageConfig<P, R>) => {
    if (!Object.values<MessageConfig>(definitions).includes(event)) {
      throw new Error('Invalid message definition')
    }
    return applyDecorators(OriginalMessagePattern({cmd: `${prefix}_${event.identifier}`})) as IMessagePattern<P, R>
  }
}
