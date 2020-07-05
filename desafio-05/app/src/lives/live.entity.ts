
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Transform, Expose } from 'class-transformer';
import * as moment from "moment";
import { Moment } from "moment";

@Entity('lives')
export class Live {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  title: String;

  @Column()
  thumbnail: String;

  @Column()
  guests: String;

  @Column()
  description: String;

  @Transform(value => moment(value), { toClassOnly: true })
  @Column({ type: 'datetime' })
  publicated_at: Moment;

  @Expose()
  get is_past_due(): boolean {
    return moment(this.publicated_at).toDate() < new Date();
  }

  @Expose()
  get day(): String {
    return moment(this.publicated_at).format('DD/MM');
  }

  @Expose()
  get hour(): String {
    return moment(this.publicated_at).format('H');
  }
}