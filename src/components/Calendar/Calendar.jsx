import React, { useState } from 'react'
import styles from "./Calendar.module.css"
import Calend from 'react-calendar'

const Calendar = ({ calendar }) => {
    const [value, onChange] = useState(new Date())
    return (
        <div className={styles.calender_div} id={calendar ? styles.showCal : null}>
            <Calend className={styles.da} onChange={onChange} value={value} />
        </div>
    )
}

export default Calendar