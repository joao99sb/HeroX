import { Global, Module } from '@nestjs/common';

import { IncidentsServicesTypeTwo } from './incidentsServices.service';

const modules = [];

@Global()
@Module({
  imports: [...modules],
  providers: [IncidentsServicesTypeTwo],
  exports: [IncidentsServicesTypeTwo],
})
export class NgoServicesModule {}
