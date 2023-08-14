import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

//Base Route for the controller
@Controller('users')
export class UserController {
  //Injecting the user service
  constructor(private readonly userService: UserService) {}

  //Decorator to define route handler for handling get requests to base route '/users'
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll(); // calling findAll method from UserService
  }

  //Get all users with parameter ':id'
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id); // callinf findOne method from UserService
  }

  //Defining route handler for post requests
  @Post()
  register(@Body() user: User): Promise<User> {
    return this.userService.register(user); //calling create method
  }

  //defining route handler for put requests
  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user); //calling update method
  }

  //Defining route handlers for delete requests
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id); //calling remove method
  }

  // Defining route handler for user registration
  // @Post('register')
  // async register(@Body() user: User): Promise<User> {
  //   return this.userService.create(user);
  // }
}

// 'UserController' class responsible for handling HTTp requests
