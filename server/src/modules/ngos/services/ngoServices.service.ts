import { Injectable } from '@nestjs/common';
import { CreateNgoService } from './createService/createNgo.service';
import { FindNgoService } from './findNgoService/findNgo.service';
import { DeleteNgoService } from './deleteService/delete.service';

@Injectable()
export class NgoServicesTypeTwo {
  constructor(
    public readonly createService: CreateNgoService,

    public readonly findNgoService: FindNgoService,

    public readonly deleteService: DeleteNgoService,
  ) {}
}
