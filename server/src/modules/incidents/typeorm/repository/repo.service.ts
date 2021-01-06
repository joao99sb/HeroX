import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Incidents from '../entities/Incidents';

@Injectable()
export class RepoIncidentsService {
  constructor(
    @InjectRepository(Incidents)
    public readonly incidentRepo: Repository<Incidents>,
  ) {}
}
