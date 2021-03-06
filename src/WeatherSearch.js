/* eslint-disable no-console */
import { useState } from 'react';
import WeatherList from './WeatherList';
import Loading from './load.gif';

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('Portland');
  const [state, setState] = useState('or');
  const [country, setCountry] = useState('usa');
  const [loading, setLoading] = useState(false);
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
      
    try {
      setLoading(true);
      const response = await fetch(`/.netlify/functions/weather?city=${city}&state=${state}&country${country}`);

      const json = await response.json();
    
      setWeather(json.daily);
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
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        <label>
          City
          <input onChange={e => setCity(e.target.value)} value={city} />
        </label>
        <label>
          State
          <input onChange={e => setState(e.target.value)} value={state} />
        </label>
        <label>
          Country
          <input onChange={e => setCountry(e.target.value)} value={country} />
        </label>
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      <div>
        {
          loading ? <img src={Loading} />
            : <WeatherList weather={weather} />
        }
      </div>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
