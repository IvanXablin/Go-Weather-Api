import React from 'react'
import styles from "./CustomInput.module.css";

function CustomInput(props) {

    const something=(event)=> {
        if (event.keyCode === 13) {
            props.func();
        }
    }

    return (
        <div>
            <div className={styles.searchForm__wrapper}>            
                <div className={styles.searchFormContent}>
                    <div className={styles.searchInput}>
                        <input 
                            type="text"
                            placeholder=" Enter your city..."
                            value={props.inputValue}
                            onChange={e => props.setInputValue(e.target.value)}
                            onKeyDown={(e) => {something(e)}}
                        />
                    </div>
                    <div className={styles.searchButton}>
                        <button onClick={props.func}>🔎</button> 
                    </div>            
                </div>
            </div>               
        </div>
    )
}

export default CustomInput