import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RepoNgoService } from '../ngos/typeorm/repository/repo.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import Ngo from '../ngos/typeorm/entities/Ngo';
import { Request } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private repoService: RepoNgoService,
    private jwtService: JwtService,
  ) {}

  async validateNgo(email: string, password: string) {
    try {
      const ngo = await this.repoService.ngoRepo.findOne({
        where: { email },
      });

      const checkPassword = await compare(password, ngo.password);

      if (!(ngo && checkPassword)) {
        return null;
      }
      delete ngo.password;
      return ngo;
    } catch (error) {
      return error;
    }
  }

  async login(ngo: Ngo) {
    if (!ngo.id) {
      throw new UnauthorizedException();
    }
    const payload = { id: ngo.id };
    return {
      ngo,
      token: this.jwtService.sign(payload),
    };
  }
}
