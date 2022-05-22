import React from 'react'
import classes from './WeatherItem.module.css'

function WeatherItem(props) {
    return (
        <div className= {classes.weather}>
            <div className={classes.blur}>
                <div className={classes.weatherContent}>
                    <h1>{props.city}</h1>
                    <p>Temperature: {props.tempr}</p>
                    <p>Wind: {props.wind}</p>
                    <p>Description: {props.descript}</p>
                </div>
            </div>           
        </div>
    )
}

export default WeatherItem