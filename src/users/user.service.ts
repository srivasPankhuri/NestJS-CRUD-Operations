// Encapsulating the logic for interacting with the database and performing CRUD operations on the 'USER' entity;

//Importing injectable decorator and not found exception class from nestjs/common module because we will use it mark class as injectable service
//Note to self- Injectable service: class in nestjs that can be injected into another class as dependency
import { Injectable, NotFoundException } from '@nestjs/common';
// Importing injectrepository decorator from repository class that provides methods to interact with the database entities
import { InjectRepository } from '@nestjs/typeorm';
// Class to perform database operations
import { Repository } from 'typeorm';
// Importing 'User' entity class from 'user.entity.ts'
import { User } from './user.entity';

//Making UserService class injectable so that I can use it anywhere else in the application
@Injectable()
export class UserService {
  constructor(
    // Injecting the User entity repository into the service
    //Creating 'userRepository' which is an instance of Repository<User> and property of UserService class
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //Note to self-  Repository<User>: Provided by TpyeORM library, it is a repository that provides a set of methods to perform operations on the database table associated with 'User' entity

  // Retrieving all users from the database
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Finding a user by ID
  async findOne(id: number): Promise<User> {
    // Using the userRepository to find a user by ID
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      // If user is not found, throw NotFoundException
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  // Creating a new user
  async create(user: User): Promise<User> {
    // Saving the new user to the database using userRepository
    return this.userRepository.save(user);
  }

  // Updating an existing user
  async update(id: number, user: User): Promise<User> {
    // Finding the existing user by ID
    const existingUser = await this.findOne(id);
    // Merging the properties of the existing user with the new data
    return this.userRepository.save({ ...existingUser, ...user });
  }

  // Removing a user
  async remove(id: number): Promise<void> {
    // Finding the user by ID
    const user = await this.findOne(id);
    // Deleting the user from the database
    await this.userRepository.remove(user);
  }
}
