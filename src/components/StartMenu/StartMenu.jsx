import React from 'react'
import styles from "./StartMenu.module.css"

const StartMenu = ({ start }) => {
    return (
        <div className={styles.start_menu} id={start ? styles.start_hide : null}>start</div>
    )
}

export default StartMenu