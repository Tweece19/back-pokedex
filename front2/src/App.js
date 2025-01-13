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
    <div className="App">
      <h1>Pokemons :</h1>
      <div className="content-wrapper">
        <div className="form-section">
          <h2>Add a new Pokemon</h2>
          <form className='pokemon-form' onSubmit={handleSubmit}>
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
        <div className="pokemon-list">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <div className='pokemon-card' key={pokemon.id}>
                <p><strong>{pokemon.name}</strong></p>
                <p>Type: {pokemon.type}</p>
                <p>HP: {pokemon.hp}</p>
              </div>
            ))
          ) : (
            <p className="empty-message">No Pokemons found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
