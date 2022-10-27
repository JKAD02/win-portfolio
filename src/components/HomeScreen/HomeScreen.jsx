import React, { useState } from 'react';
import styles from './HomeScreen.module.css';
import 'react-calendar/dist/Calendar.css';
import TaskBar from '../TaskBar/TaskBar';
import Calendar from '../Calendar/Calendar';
import AssistMenu from '../AssistMenu/AssistMenu';
import StartMenu from '../StartMenu/StartMenu';
import Search from '../Search/Search';

const HomeScreen = () => {
    const [calendar, setCalendar] = useState(false);
    const [wifi, setWifi] = useState(false);
    const [britness, setBritness] = useState(99);
    const [volume, setVolume] = useState(99);
    const [start, setStart] = useState(false);
    const [search, setSearch] = useState(false);

    const handleScreen = (wf, cal, srt, srch) => {
        setWifi(wf);
        setCalendar(cal);
        setStart(srt);
        setSearch(srch);
    }

    return (
        <>
            <div className={styles.homeScreen} style={{ filter: `brightness(${britness}%)` }}>

                <TaskBar start={start} wifi={wifi} search={search} calendar={calendar} handleScreen={handleScreen} />

                <Calendar calendar={calendar} />

                <AssistMenu volume={volume} wifi={wifi} britness={britness} setBritness={setBritness} setVolume={setVolume} />

                <StartMenu start={start} />

                <Search search={search} />
            </div>
        </>
    )
}

export default HomeScreen