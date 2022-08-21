import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

// MEMO: どのテーブルでも共通そうなやつをまとめて、extendsすると順番がめちゃくちゃになる
export abstract class EntityBase {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn({ name: 'created_at', precision: 0 })
  readonly createdAt?: Timestamp;

  @UpdateDateColumn({ name: 'updated_at', precision: 0 })
  readonly updatedAt?: Timestamp;
}
