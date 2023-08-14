import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth.strategy';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { UserModule } from '../users/user.module';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    //configuring the PassportModule to use the specified default authentication strategy, which here is the JWT strategy.
    PassportModule.register({ defaultStrategy: 'jwt' }),
    //importing the JwtModule and configuring it with the secret key and token expiration options
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
  ],
  controllers: [AuthController], //Defining AuthController as controller for this module
  providers: [AuthService, JwtStrategy], // Declaring AuthService and JwtStrategy as providers/services for this module
  exports: [JwtStrategy, PassportModule], // Exporting for use in other modules
})
export class AuthModule {}
