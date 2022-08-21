import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: '127.0.0.1',
      port: 33333,
      username: 'root',
      password: 'root',
      database: 'nestjs-todo-tutorial',
      synchronize: false,
    } as TypeOrmModuleOptions;
  }
}
