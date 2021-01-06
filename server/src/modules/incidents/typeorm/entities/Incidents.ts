import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Nog from 'src/modules/ngos/typeorm/entities/Ngo';

@Entity('incidents')
export default class Incident {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: string;

  @Column({ name: 'ngo_id' })
  ngoId: string;

  @ManyToOne(() => Nog, (ngo) => ngo.incidents)
  @JoinColumn({ name: 'ngo_id' })
  ngo: Nog;
}
