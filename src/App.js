import SearchForm from './components/Search.jsx';
import WeatherItem from './components/WeatherItem.jsx'
import { useState } from 'react';
import WeatherForecast from './components/WeatherForecast.jsx'
import './App.css'


function App() {
  const [value, setValue] = useState({city: '', temperature: '', wind: '', description: '', items:[]});

  return (
    <div className="App">
      <div className='App-content'>
          <SearchForm func={setValue}/>
              <h2>Прогноз на сегодня</h2>
                  <WeatherItem
                    city = {value.city}
                    tempr = {value.temperature}
                    wind = {value.wind}
                    descript = {value.description} 
              /> 
              <h2>Прогноз на следующие дни</h2>
                  <WeatherForecast
                    forecast = {value.items}
                    city = {value.city}
                  /> 
            </div>    
      </div>
  );
}

export default App;
