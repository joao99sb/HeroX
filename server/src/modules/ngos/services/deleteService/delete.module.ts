import { Global, Module } from '@nestjs/common';
import { DeleteNgoService } from './delete.service';
import { RepoModule } from '../../typeorm/repository/repo.module';

@Global()
@Module({
  imports: [RepoModule],
  providers: [DeleteNgoService],
  exports: [DeleteNgoService],
})
export class DeleteNgoModule {}
