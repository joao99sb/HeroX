import { Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NgosService } from './ngo.service';

@Controller()
export class NgoController {
  constructor(private readonly ngoService: NgosService) {}

  @Post('/ngo')
  createNgo(@Req() req: Request, @Res() res: Response): void {
    this.ngoService.createNgo(req, res);
  }

  @Get('/ngo')
  findAllNgo(_, @Res() res: Response): void {
    this.ngoService.findAllNgo(_, res);
  }
  @Delete('/ngo')
  deleteNgo(@Req() req: Request, @Res() res: Response): void {
    this.ngoService.deleteNgo(req, res);
  }
}
