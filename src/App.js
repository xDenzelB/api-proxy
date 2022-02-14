import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      { /* stretch goal: <WeatherSearch /> */ }
    </div>
  );
}

export default App;
