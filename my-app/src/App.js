import SearchForm from './components/SearchForm.jsx';
import WeatherItem from './components/WeatherItem.jsx'
import { useState } from 'react';
import WeatherForecast from './components/WeatherForecast.jsx';
import './App.css'


function App() {
  const [value, setValue] = useState({city: '', temperature: '', wind: '', description: '', items:[]});

  return (
    <div className="App">
        <SearchForm
            func={setValue}
        />
        <h1 className="today">Прогноз погоды на сегодня</h1>
        <WeatherItem
          city = {value.city}
          tempr = {value.temperature}
          wind = {value.wind}
          descript = {value.description}
        />    
        <WeatherForecast
            forecast = {value.items}
            city = {value.city}
        />
    </div>
  );
}

export default App;
