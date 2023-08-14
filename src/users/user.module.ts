import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service'; // Importing UserService class
import { User } from './user.entity'; // Importing User entity

// Decorating the UserModule class as Module
@Module({
  // Imports(which is an array) will tell the modules that this module is dependent on and here that module is TypeOrmModule.forFeature module to include the User entity.
  imports: [
    TypeOrmModule.forFeature([User]), // Including User entity here. (This imports the TypeOrmModule with the User entity specified. It makes the User entity available for use in the module's services and controllers.)
  ],
  controllers: [UserController], // Declaring UserController as controller for this module
  providers: [UserService], // Declaring UserService as providers/services fr this module
  exports: [UserService],
})
export class UserModule {} // Exporting it to make it accessible to other modules
