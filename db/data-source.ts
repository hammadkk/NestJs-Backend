// ormconfig.ts
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenv.config();
export const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'Spotify-Clone',
  // synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  //  logging: true,
};
const dataSource = new DataSource(ormconfig);
export default dataSource;
