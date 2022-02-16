import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className='poke-img'>
      {
        pokemon.map((monster, i) => <div className='poke-item' key={monster.pokemon + i}>
          <p>{monster.pokemon}</p>
          <img src={monster.url_image} />
        </div>)
      }
    </div>
  );
}
