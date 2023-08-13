import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity'; // Importing User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Including User entity here
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
