import './App.css';
import React, { useEffect, useState } from 'react';
import { getPokemons, createPokemon } from './pokemon/pokemon.request';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [newPokemon, setNewPokemon] = useState({ name: '', type: '', hp: '' });


  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons);
      console.log(pokemons);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPokemon((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPokemon(newPokemon).then((pokemon) => {
      setPokemons((prev) => [...prev, pokemon]);
      setNewPokemon({ name: '', type: '', hp: '' });
    });
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Pokemons :</h1>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <p>{pokemon.name} {pokemon.type} {pokemon.hp}</p>
          </div>
        ))
      ) : (
        <p>No Pokemons found</p>
      )}
      <h2>Add a new Pokemon</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <input
          type="text"
          name="name"
          value={newPokemon.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="type"
          value={newPokemon.type}
          onChange={handleChange}
          placeholder="Type"
          required
        />
        <input
          type="number"
          min={0}
          name="hp"
          value={newPokemon.hp}
          onChange={handleChange}
          placeholder="HP"
          required
        />
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
  );
}

export default App;
