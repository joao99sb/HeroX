import { HttpStatus, Injectable } from '@nestjs/common';
import { IncidentsServicesTypeTwo } from './services/incidentsServices.service';
import { Request, Response } from 'express';

@Injectable()
export class IncidentsService {
  constructor(private readonly incidentService: IncidentsServicesTypeTwo) {}

  async findAllIncidents(req: Request, res: Response): Promise<Response> {
    const { page = 1 } = req.query;
    const count = await this.incidentService.countAllIncidents();
    res.header('X-Total-Count', `${count}`);

    const incidents = await this.incidentService.listAllIncidents(page);
    return res.status(HttpStatus.ACCEPTED).json(incidents);
  }

  async createIncident(req: Request, res: Response): Promise<Response> {
    const { title, description, value } = req.body;
    const { ngoId } = req.user;

    try {
      console.log(ngoId);
      const incident = await this.incidentService.createIncident({
        title,
        description,
        value,
        ngoId,
      });
      return res.json(incident);
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  async findIncidents(req: Request, res: Response): Promise<void> {
    const { ngoId } = req.user;
    const incidents = await this.incidentService.findIncindets(ngoId);
    res.json(incidents);
  }

  async deleteIncidents(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const incident = await this.incidentService.deleteIncident(id);
    return res.json(incident);
  }
}
