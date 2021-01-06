import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { NgoModule } from '../ngos/ngo.module';

import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config/authConfig';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AppController } from './auth.controller';

@Module({
  imports: [
    NgoModule,
    PassportModule,
    JwtModule.register({
      secret: config.secret,
      signOptions: { expiresIn: config.expiresIn },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AppController],
  exports: [AuthService, LocalStrategy],
})
export class AuthModule {}
