import React from 'react'
import styles from './WeatherItem.module.css'

function WeatherItem(props) {
    return (
        <div className= {styles.weather}>
            <div className={styles.blur}>
                <div className={styles.weatherContent}>
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