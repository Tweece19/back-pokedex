import { PokemonType } from './pokemon.model';
import { URL, POKEMONS } from './request.url.constant';

/**
 * @returns {Promise<Pokemon[]>}
 */
const getPokemons = async () => {
    console.log('Fetching Pokemons...');
    const response = await fetch(`${URL}/${POKEMONS}`);
    const data = await response.json();
    return data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        type: PokemonType.FIRE, // Exemple de type
        hp: 100, // Exemple de HP
    }));
};

export { getPokemons };