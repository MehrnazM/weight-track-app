import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <div className="d-flex containter">
            <footer  className="py-3 bg-dark fixed-bottom" >
                <div className={styles.footer} >
                    <h6 style={{fontWeight : "bold"}} className ={styles.text} > Designed by: Mehrnaz</h6>
                    <h6 style={{fontStyle : "italic"}} className ={styles.text}>Fall 2020</h6>
                </div>
            </footer>
        </div>
    )
}

export default Footer