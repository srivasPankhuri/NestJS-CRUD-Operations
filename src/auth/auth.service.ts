import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.userService.findOne(payload.sub);
  }

  async login(user: User): Promise<string> {
    const payload: JwtPayload = { sub: user.id };
    return this.jwtService.sign(payload);
  }
}
