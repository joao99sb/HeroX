import { Global, Module } from '@nestjs/common';
import { CreateNgoService } from './createNgo.service';
import { RepoModule } from '../../typeorm/repository/repo.module';

@Global()
@Module({
  imports: [RepoModule],
  providers: [CreateNgoService],
  exports: [CreateNgoService],
})
export class CreateNgoModule {}
