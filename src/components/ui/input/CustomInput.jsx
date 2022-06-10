import React from 'react'
import classes from "./CustomInput.module.css";

function CustomInput(props) {
    return (
        <div>
            <input className={classes.customInput}
                type="text"
                placeholder="Введите название города"
                value={props.inputValue}
                onChange={e => props.setInputValue(e.target.value)}
            />
            <button className={classes.customButton} onClick={props.func}>Search</button>
        </div>
    )
}

export default CustomInput