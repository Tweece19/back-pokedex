import './App.css';
import React, { useEffect } from 'react';
import { getPokemons } from './pokemon/pokemon.request';

function App() {
  const [pokemons, setPokemons] = React.useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons);
      console.log(pokemons);
    });
  }, []);

  return (
    <div className="App">
      <h1>Pokemons :</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.hp}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
