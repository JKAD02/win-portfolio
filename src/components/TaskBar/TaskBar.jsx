import React from 'react'
import widget from '../../img/icon/widget.png'
import home from '../../img/icon/home.png'
import setting from '../../img/icon/settings.png'
import explorer from '../../img/icon/explorer.png'
import store from '../../img/icon/store.png'
import styles from "./TaskBar.module.css"

const TaskBar = ({ wifi, start, search, calendar, handleScreen }) => {

    return (
        <div className={styles.taskBar_div}>
            <div className={styles.left_menu}>
                <div><img width={'100%'} src={widget} alt="" /></div>
            </div>
            <div className={styles.center_menu}>
                <div onClick={() => handleScreen(false, false, !start, false)}><img width={'100%'} src={home} alt="" /></div>
                <div onClick={() => handleScreen(false, false, false, !search)}><i className='bx bx-search'></i></div>
                <div><img width={'100%'} src={setting} alt="" /></div>
                <div><img width={'100%'} src={explorer} alt="" /></div>
                <div><img width={'100%'} src={store} alt="" /></div>
            </div>
            <div className={styles.right_menu}>
                <div className={styles.right_div1} onClick={() => handleScreen(!wifi, false, false, false)}>
                    <div><i className="fa-solid fa-angle-up"></i></div>
                    <div><i className="fa-solid fa-wifi"></i></div>
                    <div><i className="fa-solid fa-volume-high"></i></div>
                </div>
                <div className={styles.right_div2} onClick={() => handleScreen(false, !calendar, false, false)}>
                    <div>{new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })}</div>
                    <div>{new Date().toLocaleDateString("en-US", { year: "2-digit", month: "2-digit", day: "numeric" })}</div>
                </div>
            </div>
        </div>
    )
}

export default TaskBar