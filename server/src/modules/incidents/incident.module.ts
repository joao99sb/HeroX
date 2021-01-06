import { Global, Module } from '@nestjs/common';
import { RepoModule } from './typeorm/repository/repo.module';
import { IncidentsService } from './incident.service';
import { IncidentsController } from './incident.controller';

import { NgoServicesModule } from './services/incidentsServices.module';

const modules = [NgoServicesModule, RepoModule];

@Global()
@Module({
  imports: [...modules],
  providers: [IncidentsService],
  controllers: [IncidentsController],
  exports: [IncidentsService],
})
export class IncidentsModule {}
