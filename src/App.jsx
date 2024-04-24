import './App.css';
import React from 'react';
import useCustomHook from './hooks/useCustomHook';

const App = () => {
  const pokemonData = useCustomHook('https://pokeapi.co/api/v2/pokemon/1');
  const rickAndMortyData = useCustomHook('https://rickandmortyapi.com/api/character/1');

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickAndMortyData && (
        <>
          <p>{rickAndMortyData.name}</p>
          <img src={rickAndMortyData.image} alt={rickAndMortyData.name} />
        </>
      )}
    </div>
  );
};

export default App;