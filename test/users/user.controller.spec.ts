import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/users/user.controller';
import { UserService } from '../../src/users/user.service';
import { UserModule } from '../../src/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../src/users/user.entity';

describe('UserController', () => {
  let userController: UserController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [User],
          synchronize: true,
        }),
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
