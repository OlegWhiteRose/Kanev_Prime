// src/file/file.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService<I> {
  private filePath: string;

  public setFilePath(filePath: string): void {
    this.filePath = path.resolve(__dirname, filePath);
  }

  public read<T extends I>(): T {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as T;
  }

  public add<T>(newData: T): void {
    const data = this.read();
    if (Array.isArray(data)) {
      data.push(newData);
    }
    this.write(data);
  }

  public write<T extends I>(data: T): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}


