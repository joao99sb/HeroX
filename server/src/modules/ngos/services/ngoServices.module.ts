import { Global, Module } from '@nestjs/common';
import { FindNgoModule } from './findNgoService/findNgo.module';
import { CreateNgoModule } from './createService/createNgo.module';
import { NgoServicesTypeTwo } from './ngoServices.service';
import { DeleteNgoModule } from './deleteService/delete.module';

const modules = [FindNgoModule, CreateNgoModule, DeleteNgoModule];

@Global()
@Module({
  imports: [...modules],
  providers: [NgoServicesTypeTwo],
  exports: [NgoServicesTypeTwo],
})
export class NgoServicesModule {}
