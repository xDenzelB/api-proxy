import { useState } from 'react';

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('Portland');
  const [loading, setLoading] = useState(false);
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
      
    try {
      setLoading(true);
      const response = await fetch(`/.netlify/functions/yelp?search=${search}`);

      const json = await response.json();

      setBusiness(json.businesses);
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
      <form>
            Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
