import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
