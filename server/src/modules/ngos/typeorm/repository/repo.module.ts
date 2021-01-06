import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoNgoService } from './repo.service';
import Nog from '../entities/Ngo';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Nog])],
  providers: [RepoNgoService],
  exports: [RepoNgoService],
})
export class RepoModule {}
