import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 33333,
  username: 'root',
  password: 'root',
  database: 'nestjs-todo-tutorial',
  synchronize: false,
  entities: ['src/**/entities/*.entity.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  logging: false,
});
