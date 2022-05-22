import React from "react";
import WeatherItem from "./WeatherItem.jsx";

function WeatherForecast({forecast, city}) {
    const array = forecast;
    return (
        <div>
            <h1>Прогноз погоды на следующие дни</h1>
             {array.map(i => {
                 return (
                        <div>
                        <WeatherItem 
                            city = {city}
                            tempr = {i.temperature}
                            wind = {i.wind}
                            descript = {'Day ' + i.day}
                        />
                        <br />
                        </div>
                 )
             })}
        </div>
    )
}

export default WeatherForecast