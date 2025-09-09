import { Injectable, NotFoundException } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { Stock } from './entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  constructor(private fileService: FileService<Stock[]>) {
    this.fileService.setFilePath('../../assets/stocks.json');
  }

  create(createStockDto: CreateStockDto) {
    const stocks = this.fileService.read();
    const stock = { ...createStockDto, id: stocks.length + 1 };
    this.fileService.add(stock);
  }

  findAll(title?: string): Stock[] {
    const stocks = this.fileService.read();
    return title
      ? stocks.filter((stock) =>
          stock.title.toLowerCase().includes(title.toLowerCase()),
        )
      : stocks;
  }

  findOne(id: number): Stock {
    const stocks = this.fileService.read();
    const stock = stocks.find((s) => s.id === id);
    if (!stock) {
      throw new NotFoundException(`Stock with id ${id} not found`);
    }
    return stock;
  }

  update(id: number, updateStockDto: UpdateStockDto): Stock {
    const stocks = this.fileService.read();
    const index = stocks.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Stock with id ${id} not found`);
    }
    stocks[index] = { ...stocks[index], ...updateStockDto };
    this.fileService.write(stocks);
    return stocks[index];
  }

  remove(id: number): { message: string } {
    const stocks = this.fileService.read();
    const exists = stocks.some((s) => s.id === id);
    if (!exists) {
      throw new NotFoundException(`Stock with id ${id} not found`);
    }
    const filteredStocks = stocks.filter((stock) => stock.id !== id);
    this.fileService.write(filteredStocks);
    return { message: `Stock with id ${id} has been removed` };
  }
}


