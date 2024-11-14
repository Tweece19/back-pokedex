import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) {}

  create(createPokemonDto: CreatePokemonDto) {
    const pokemon = new Pokemon();
    pokemon.name = createPokemonDto.name;
    pokemon.type = createPokemonDto.type;
    pokemon.hp = createPokemonDto.hp;
    return this.pokemonRepository.save(pokemon);
  }

  findAll() {
    return this.pokemonRepository.find();
  }

  findOne(id: number) {
    return this.pokemonRepository.findOneBy({ id });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonRepository.update(id, updatePokemonDto);
  }

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
}
