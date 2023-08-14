import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { bcrypt } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, // Injecting the UserService
    private readonly jwtService: JwtService, // Injectin the JwtService
  ) {}

  //validating user credentials during login
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user; // return the user if credentials are valid
    }
    return null; // return null if user is not found or credentials are invalid
  }

  //Create and return access token during login
  async login(user: any): Promise<{ accessToken: string }> {
    // Creating payload(carries essential information about the user's identity) for jwt tokens
    const payload: JwtPayload = {
      username: user.username,
      password: user.password,
      sub: user.id,
    };
    // Generating access token
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
