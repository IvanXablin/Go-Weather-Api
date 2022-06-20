import React from "react";
import WeatherItem from "./WeatherItem.jsx";
import classes from "./WeatherForecast.module.css";

function WeatherForecast({forecast, city}) {
    return (
        <div>
             {forecast.map(i => {
                 return (
                     <div className={classes.forecastContent}>
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