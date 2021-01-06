import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Ngo from '../entities/Ngo';

@Injectable()
export class RepoNgoService {
  constructor(
    @InjectRepository(Ngo)
    public readonly ngoRepo: Repository<Ngo>,
  ) {}
}
