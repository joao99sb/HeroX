import { Global, Module } from '@nestjs/common';
import { FindNgoService } from './findNgo.service';
import { RepoModule } from '../../typeorm/repository/repo.module';

@Global()
@Module({
  imports: [RepoModule],
  providers: [FindNgoService],
  exports: [FindNgoService],
})
export class FindNgoModule {}
