import {
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IncidentsService } from './incident.service';

@Controller()
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Get('incidents/all')
  findAllIncidents(@Req() req: Request, @Res() res: Response) {
    return this.incidentsService.findAllIncidents(req, res);
  }

  @UseGuards(JwtAuthGuard)
  @Post('incidents')
  createIncident(@Req() req: Request, @Res() res: Response) {
    this.incidentsService.createIncident(req, res);
  }

  @UseGuards(JwtAuthGuard)
  @Get('incidents')
  findIncidents(@Req() req: Request, @Res() res: Response) {
    this.incidentsService.findIncidents(req, res);
  }

  @Delete('incidents/:id')
  deleteIncidents(@Req() req: Request, @Res() res: Response) {
    this.incidentsService.deleteIncidents(req, res);
  }
}
