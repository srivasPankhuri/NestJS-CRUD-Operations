import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import * as dotenv from 'dotenv';

// console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Extracting JWTTokem from authorization header
      secretOrKey: 'secret-key', // providing secret key to verify
    });
  }

  // Validating the payload extracted from the token
  async validate(payload: JwtPayload): Promise<any> {
    // Calling the AuthService's method to validate and fetch user details
    const user = await this.authService.validateUser(
      payload.username,
      payload.password,
    );

    if (user) {
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await this.authService.validateUser(
        payload.username,
        user.password,
      );

      if (isPasswordValid) {
        // If password is valid, return the user
        return user;
      }
    }

    return null; // Return null if user is not found or credentials are invalid
  }
}
