import { Module } from '@nestjs/common';
import { ApplicationsService } from './app.service';
import { ApplicationsController } from './app.controller';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class AppModule {}
