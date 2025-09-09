// src/stocks/stocks.module.ts
import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [StocksController],
  providers: [StocksService, FileService],
})
export class StocksModule {}

