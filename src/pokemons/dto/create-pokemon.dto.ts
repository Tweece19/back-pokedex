import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PokemonType } from '../entities/pokemon.type';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(PokemonType, {
    message: 'Invalid type must be : fire, water or grass',
  })
  @IsNotEmpty()
  type: PokemonType;

  @IsInt()
  @IsNotEmpty()
  hp: number;
}
