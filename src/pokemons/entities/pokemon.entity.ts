import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonType } from './pokemon.type';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  hp: number;

  @Column({ type: 'enum', enum: PokemonType })
  type: PokemonType;
}
