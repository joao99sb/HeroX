import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoIncidentsService } from './repo.service';
import Incidents from '../entities/Incidents';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Incidents])],
  providers: [RepoIncidentsService],
  exports: [RepoIncidentsService],
})
export class RepoModule {}
