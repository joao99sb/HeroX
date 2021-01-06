import { Injectable } from '@nestjs/common';
import { RepoNgoService } from '../../typeorm/repository/repo.service';

import Ngo from '../../typeorm/entities/Ngo';

@Injectable()
export class FindNgoService {
  constructor(private readonly ngoService: RepoNgoService) {}

  public async findAllNgo() {
    const ngos = await this.ngoService.ngoRepo.find({
      relations: ['incidents'],
    });
    ngos.forEach((ngo) => delete ngo.password);

    return ngos;
  }
  public async findByEmail(email: string): Promise<Ngo> {
    return await this.ngoService.ngoRepo.findOne({
      where: {
        email,
      },
    });
  }
}
