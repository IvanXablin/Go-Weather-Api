import React from "react"
import { useState } from 'react';
import CustomInput from "./ui/SearchForm/SearchForm.jsx";
import AxiosService from "../api/AxiosService"


export default function Search(props) {
    
    const [inputValue, setInputValue] = useState('');
    const axiosService = new AxiosService();

    async function fetchWeather() {
      const res = await axiosService.getWeather(inputValue);
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

