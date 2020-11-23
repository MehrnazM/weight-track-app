import React from "react"
import styles from "./Login.module.css"
import { useHistory } from 'react-router-dom'
import classNames from "classnames"

function Login(){
    
    
    const history = useHistory()
    const handleClick = (value) => history.push(value)
    const boxStyle = classNames('col-md-3',styles.box)
    
        return(
            <div className={boxStyle}>

                <h2 className={styles.welcome}> Welcome to weight track app!</h2>
                <div style={{marginTop : "80px"}}>
                    <button value="/sign-in" className={styles.button} onClick={(e) => handleClick(e.target.value)}>
                        You have an account? Click to sign in
                    </button>
                    <br/>
                    <button  value="/create-acc"  className={styles.button} onClick={(e) => handleClick(e.target.value)}>
                        You don't have an account? Click to create a new one
                    </button>
                </div>
            </div>
        )
    
}

export default Login
