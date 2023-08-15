import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/users/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; // Import Repository from 'typeorm'
import { User } from '../../src/users/user.entity';

describe('UserService', () => {
  let userService: UserService;
  let userRepositoryMock: Partial<Record<keyof Repository<User>, jest.Mock>>;

  beforeEach(async () => {
    userRepositoryMock = {
      find: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers: User[] = [
        { id: 1, username: 'user1', password: 'pass1' },
        { id: 2, username: 'user2', password: 'pass2' },
      ];

      userRepositoryMock.find.mockReturnValue(mockUsers);

      const result = await userService.findAll();

      expect(result).toEqual(mockUsers);
    });
  });
});
