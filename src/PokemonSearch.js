/* eslint-disable no-console */
import { useState } from 'react';
import PokemonList from './PokemonList';
import Loading from './load.gif';

export default function PokemonSearch() {

  const [search, setSearch] = useState('Pikachu');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`/.netlify/functions/pokemon?search=${search}`);

      const json = await response.json();

      setPokemon(json.results);
      setLoading(false);
    } catch (e) {
      console.log('=============================\n');
      console.log('|| e', e);
      console.log('\n=============================');
      console.error(e);
    }
        // set the loading state to true
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
  
        // put the jsonified data in state and set the loading state to false
  }

      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        <input onChange={e => setSearch(e.target.value)} value={search} />
            Search pokemon for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>

      <div>
        {
          loading ? <img src={Loading} />  
            : <PokemonList pokemon={pokemon}/>
        }
      </div>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
