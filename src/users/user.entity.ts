// Import TypeORM module to define the entity
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Decorating the class with @Entity() to define it as a TypeORM entity
@Entity()
export class User {
  //   Decorating the id property with @PrimaryGeneratedColumn() to define it as the primary key of the entity and indicate that its value will be generated automatically.
  @PrimaryGeneratedColumn()
  id: number;

  // Decorating username property as @Column to define it as column in the database table
  @Column()
  username: string;

  // Decorating password property as @Column to define it as column in the database table
  @Column()
  password: string;
}
