import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('varchar', { length: 50, nullable: false, comment: 'タスク名' })
  title: string;

  @Column('date', { name: 'due_date', nullable: false, comment: '期限日' })
  dueDate: Date;

  @Column('tinyint', { width: 1, default: 1, comment: 'ステータス' })
  status: number;

  @CreateDateColumn({ name: 'created_at', precision: 0 })
  readonly createdAt?: Timestamp;

  @UpdateDateColumn({ name: 'updated_at', precision: 0 })
  readonly updatedAt?: Timestamp;

  @DeleteDateColumn({ name: 'deleted_at', precision: 0 })
  readonly deletedAt?: Timestamp;
}
