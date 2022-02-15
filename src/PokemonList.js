import React from 'react';

export default function PokemonList({ formName }) {
  return (
    <div>
      {
        formName.map((monster, i) => <div className='poke-item' key={monster.pokemon + i}>
          <p>{monster.pokemon}</p>
          <img src={monster.url_image} />
        </div>)
      }
    </div>
  );
}
