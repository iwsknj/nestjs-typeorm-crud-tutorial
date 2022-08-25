import { IsNotEmpty, IsString, IsDate } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDate()
  due_date: Date;
}
