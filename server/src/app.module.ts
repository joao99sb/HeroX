import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from './config/ormConfig';
import { NgoModule } from './modules/ngos/ngo.module';
import { IncidentsModule } from './modules/incidents/incident.module';
import { AuthModule } from './modules/auth/auth.module';

const repositories = [NgoModule, IncidentsModule, AuthModule];

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ...repositories],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
