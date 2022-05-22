import React from "react"
import axios from 'axios'
import { useState } from 'react';

function SearchForm(props) {
    const [inputValue, setInputValue] = useState('');
  
    async function fetchWeather() {
      const res = await axios.get(`https://goweather.herokuapp.com/weather/${inputValue}`);
      const weather = {
                       city: inputValue, 
                       temperature: res.data.temperature,   
                       wind: res.data.wind, 
                       description: res.data.description, 
                       items: res.data.forecast
                    };

      props.func(weather);
    }

    return (
        <div>
            <h1>Прогноз погоды</h1>
            <input
                placeholder = 'Впишите название города'
                value = {inputValue}
                onChange = {e => setInputValue(e.target.value)}
            />
            <button onClick={fetchWeather}>Получить</button>
            <h1>Сегодня</h1>
        </div>
    )
}

export default SearchForm