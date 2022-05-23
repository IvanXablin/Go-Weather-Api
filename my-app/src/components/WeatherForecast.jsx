import React from "react";
import WeatherItem from "./WeatherItem.jsx";
import classes from "./WeatherForecast.module.css";

function WeatherForecast({forecast, city}) {
    return (
        <div>
            <h1 className={classes.h1}>Прогноз погоды на следующие дни</h1>
             {forecast.map(i => {
                 return (
                     <div>
                        <WeatherItem 
                            city = {city}
                            tempr = {i.temperature}
                            wind = {i.wind}
                            descript = {'Day ' + i.day}
                        />
                        <br/>
                     </div>
                 )
             })}
        </div>
    )
}

export default WeatherForecast