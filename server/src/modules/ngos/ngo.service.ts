import { HttpStatus, Injectable } from '@nestjs/common';
import { NgoServicesTypeTwo } from './services/ngoServices.service';
import { Request, Response } from 'express';

@Injectable()
export class NgosService {
  constructor(private readonly ngoService: NgoServicesTypeTwo) {}

  async createNgo(req: Request, res: Response): Promise<Response> {
    const { name, email, password, whatsapp, city, uf } = req.body;
    try {
      const ngo = await this.ngoService.createService.create({
        name,
        email,
        password,
        whatsapp,
        city,
        uf,
      });
      return res.status(HttpStatus.CREATED).json(ngo);
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  public async findAllNgo(_, res: Response): Promise<Response> {
    try {
      const ngos = await this.ngoService.findNgoService.findAllNgo();
      return res.status(HttpStatus.ACCEPTED).json(ngos);
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  public async deleteNgo(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const ngo = await this.ngoService.findNgoService.findByEmail(email);
    if (!ngo) {
      throw new Error('NGO do not exist');
    }
    await this.ngoService.deleteService.delete(ngo);
    return res.status(HttpStatus.OK).json(ngo);
  }
}
