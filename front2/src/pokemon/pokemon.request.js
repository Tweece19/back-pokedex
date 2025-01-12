import { URL, POKEMONS } from './request.url.constant';
import axios from 'axios';

/**
 * @returns {Promise<Pokemon[]>}
 */
const getPokemons = async () => {
    console.log('Fetching Pokemons...');
    console.log(`${URL}/${POKEMONS}`);
    const response = await axios.get(`${URL}/${POKEMONS}`);
    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }
    const data = response.data;
    console.log('Pokemons fetched:', data);
    const test = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        hp: pokemon.hp,
    }));
    return test;
};

export const createPokemon = async (pokemon) => {
    await fetch(`${URL}/${POKEMONS}`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
    });
    return pokemon;
};

export { getPokemons };