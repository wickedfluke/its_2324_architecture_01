import { WarehouseEventsModule } from '@warehouse/events';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WarehouseEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
