import { URL, POKEMONS } from './request.url.constant';

/**
 * @returns {Promise<Pokemon[]>}
 */
const getPokemons = async () => {
    console.log('Fetching Pokemons...');
    console.log(`${URL}/${POKEMONS}`);
    const response = await fetch(`${URL}/${POKEMONS}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
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