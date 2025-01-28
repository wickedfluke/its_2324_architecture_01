import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('WAREHOUSE_CLIENT') private client: ClientProxy) {}

  async getData() {
    console.log('sending request to warehouse');
    const result =  await lastValueFrom(this.client.send<number>({cmd: 'getStock'}, {}));
    console.log('received response from warehouse', result);
    return result;
  }
}
