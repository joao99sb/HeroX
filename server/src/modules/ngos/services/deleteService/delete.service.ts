import { Injectable } from '@nestjs/common';
import { RepoNgoService } from '../../typeorm/repository/repo.service';

import Ngo from '../../typeorm/entities/Ngo';

@Injectable()
export class DeleteNgoService {
  constructor(private readonly ngoService: RepoNgoService) {}

  public async delete(ngo: Ngo) {
    await this.ngoService.ngoRepo.remove(ngo);
  }
}
