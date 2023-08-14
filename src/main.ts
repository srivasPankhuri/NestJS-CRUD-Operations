import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { config as dotenvConfig } from 'dotenv';
// dotenvConfig();
// console.log('Loaded environment variables:', process.env);
// console.log('JWT_SECRET_KEY:', process.env.DB_USERNAME);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
