import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getStockById(id: string) {
    return 15;
  }
}
