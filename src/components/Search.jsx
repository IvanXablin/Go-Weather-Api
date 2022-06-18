import React from "react"
import axios from 'axios'
import { useState } from 'react';
import CustomInput from "./ui/SearchForm/SearchForm.jsx";


export default function Search(props) {
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
            <CustomInput
                inputValue = {inputValue}
                setInputValue = {setInputValue}
                func = {fetchWeather}
            />                    
            <br/>
        </div>
    )
}

