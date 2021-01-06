import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';

import Incident from '../../../incidents/typeorm/entities/Incidents';

@Entity({ name: 'ngos' })
export default class Ngo {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @OneToMany(() => Incident, (incidents) => incidents.ngo)
  incidents: Incident[];
}
