import { Global, Module } from '@nestjs/common';
import { RepoModule } from './typeorm/repository/repo.module';
import { NgosService } from './ngo.service';
import { NgoController } from './ngo.controller';

import { NgoServicesModule } from './services/ngoServices.module';

const modules = [NgoServicesModule, RepoModule];

@Global()
@Module({
  imports: [...modules],
  providers: [NgosService],
  controllers: [NgoController],
  exports: [NgosService],
})
export class NgoModule {}
