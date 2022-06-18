import SearchForm from './components/SearchForm.jsx';
import WeatherItem from './components/WeatherItem.jsx'
import { useState } from 'react';
import WeatherForecast from './components/WeatherForecast.jsx';
import './App.css'


function App() {
  const [value, setValue] = useState({city: '', temperature: '', wind: '', description: '', items:[]});

  /* 

  <h1 className="today">Прогноз погоды на сегодня</h1>
  <WeatherForecast
      forecast = {value.items}
      city = {value.city}
  /> 

  */

  return (
    <div className="App">
      <div className='App-content'>
       <SearchForm func={setValue}/>
       <h2 className="today">Прогноз на сегодня</h2>
       <WeatherItem
          city = {value.city}
          tempr = {value.temperature}
          wind = {value.wind}
          descript = {value.description}
        />    
      </div>    
    </div>
  );
}

export default App;
