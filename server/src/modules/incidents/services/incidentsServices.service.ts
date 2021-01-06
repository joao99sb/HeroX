import { Injectable } from '@nestjs/common';
import { RepoIncidentsService } from '../typeorm/repository/repo.service';
@Injectable()
export class IncidentsServicesTypeTwo {
  constructor(private readonly repoService: RepoIncidentsService) {}
  public async listAllIncidents(page: any) {
    const incdents = await this.repoService.incidentRepo.find({
      take: 5,
      skip: (page - 1) * 5,
      relations: ['ngo'],
    });
    incdents.map((incident) => delete incident.ngo.password);
    return incdents;
  }

  public async createIncident({ ngoId, title, description, value }) {
    const incident = this.repoService.incidentRepo.create({
      title,
      description,
      value,
      ngoId,
    });

    await this.repoService.incidentRepo.save(incident);
    return incident;
  }

  public async deleteIncident(id: string) {
    const incident = await this.repoService.incidentRepo.findOne(id);
    await this.repoService.incidentRepo.remove(incident);
    return incident;
  }

  public async countAllIncidents() {
    return await this.repoService.incidentRepo.count();
  }

  public async findIncindets(ngoId: string) {
    return await this.repoService.incidentRepo.find({
      where: {
        ngoId,
      },
    });
  }
}
