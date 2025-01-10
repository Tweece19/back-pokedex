import { URL, POKEMONS } from './request.url.constant';

/**
 * @returns {Promise<Pokemon[]>}
 */
const getPokemons = async () => {
    console.log('Fetching Pokemons...');
    const response = await fetch(`${URL}/${POKEMONS}`);
    const data = await response.json();
    console.log('Pokemons fetched:', data);
    const test = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        hp: pokemon.hp,
    }));
    return test;
};

export { getPokemons };