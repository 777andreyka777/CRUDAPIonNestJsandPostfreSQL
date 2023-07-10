import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity()
export class Employee {
  @Column()
  id: number;
 
  @Column()
  name: string;
 
  @Column()
  salary: number;
 
  @Column()
  age: number;
}