import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { FileService } from './file/file.service';

@Module({
  imports: [StocksModule],
  providers: [AppService, FileService],
})
export class AppModule {}
