import { Injectable } from '@nestjs/common';
import { RepoNgoService } from '../../typeorm/repository/repo.service';
import { hash } from 'bcryptjs';
import { randomBytes } from 'crypto';
import Ngo from '../../typeorm/entities/Ngo';

interface IRequeste {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
  city: string;
  uf: string;
}

@Injectable()
export class CreateNgoService {
  constructor(private readonly ngoService: RepoNgoService) {}

  public async create({
    name,
    email,
    password,
    whatsapp,
    city,
    uf,
  }: IRequeste): Promise<Ngo> {
    const ngoCheck = await this.ngoService.ngoRepo.findOne({
      where: { email },
    });

    if (ngoCheck) {
      throw new Error('email in use');
    }
    const hashedPassword = await hash(password, 10);

    const id = randomBytes(4).toString('hex');
    console.log(id);

    const ngo = this.ngoService.ngoRepo.create({
      id,
      name,
      email,
      password: hashedPassword,
      whatsapp,
      city,
      uf,
    });

    await this.ngoService.ngoRepo.save(ngo);
    delete ngo.password;
    return ngo;
  }
}
