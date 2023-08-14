import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';

// Decorator to define base route
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} // Injecting AuthService

  //Decorator to define route fr login /auth/login
  @Post('login') // Defining a route for the login
  async login(@Request() req): Promise<any> {
    const user: User = req.user; // Getting/Extracting authenticated user from the request
    const token = await this.authService.login(user); // Generating token using AuthService
    return { token }; // Returning generated toekn
  }
}
