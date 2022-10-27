import React from 'react'
import { useState } from 'react'
import styles from "./AssistMenu.module.css"

const AssistMenu = ({ volume, wifi, setVolume, britness, setBritness }) => {

    const [assist, setAssist] = useState({
        wifi: false,
        bluetooth: false,
        volume: false,
        nightLight: false,
        theme: false,
        batterySaver: false,
    })

    return (
        <div className={styles.set_wifi_div} id={wifi ? styles.showAssistMenu : null}>
            <div className={styles.box_div}>
                <div><i className="fa-solid fa-wifi"></i></div>
                <div><i className="bx bx-bluetooth"></i></div>
                <div><i className="fa-solid fa-volume-high"></i></div>
                <div><i className="fa-solid fa-moon"></i></div>
                <div><i className="bx bx-sun"></i></div>
                <div><i className="fa-brands fa-envira"></i></div>
            </div>
            <div className={styles.britness_div}>
                <div><i className="bx bxs-sun"></i></div>
                <div className={styles.bri_input}><input type="range" min='11' max='99' value={britness} onChange={(e) => setBritness(e.target.value)} /></div>
            </div>
            <div className={styles.volume_div}>
                <div><i className={volume > 50 ? "fa-solid fa-volume-high" : volume < 2 ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-low"}></i></div>
                <div className={styles.vol_input}><input value={volume} type="range" min='1' max='99' onChange={(e) => setVolume(e.target.value)} /></div>
            </div>
            <div className={styles.battery_div}>
                <i class='bx bxs-battery-charging'></i><span>100%</span>
            </div>
        </div>
    )
}

export default AssistMenu