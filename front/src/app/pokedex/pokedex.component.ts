import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  protected pokemons!: Pokemon[];
  
  constructor(private _pokemonService: PokemonService) {
    this._pokemonService.getPokemons().subscribe(pokemons => {
      if (!pokemons.loading) {
        this.pokemons = pokemons.value;
      }
    })
  }
}
