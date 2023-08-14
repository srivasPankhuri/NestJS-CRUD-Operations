import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const connection: TypeOrmModuleOptions = {
  type: 'postgres', // Database type
  host: 'localhost', // Host where the database is running
  port: 5432, // Port number
  username: 'postgres',
  password: '12345678',
  database: 'nest-js-crud',
  entities: [
    join(__dirname, '../users/**/*.entity{.js,.ts}'),
    join(__dirname, '../auth/**/*.entity{.js,.ts}'),
  ], // Entities to be used
  synchronize: true, // Auto create/update tables based on entity definitions (for development)
  autoLoadEntities: true,
};

console.log('Connected to database:', connection);
