import { DeleteDateColumn, Timestamp } from 'typeorm';
import { EntityBase } from './base.entity';

export abstract class DeletableEntity extends EntityBase {
  @DeleteDateColumn({ name: 'deleted_at', precision: 0 })
  readonly deletedAt?: Timestamp;
}
