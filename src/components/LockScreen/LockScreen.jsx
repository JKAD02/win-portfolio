import React, { useState } from 'react'
import styles from './LockScreen.module.css'
import myPic from '../../img/Wallpaper.jpg'
import { Link } from 'react-router-dom'

const LockScreen = () => {
  const [profile, setProfile] = useState(false)

  return (
    <>
      <div className={styles.lockScreen} onClick={() => { setProfile(true) }}>
        {profile ? null : (
          <div className={styles.date_time_div}>
            <div className={styles.time_div}>
              {new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </div>
            <div className={styles.date_div}>
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        )}
      </div>
      {profile ? (
        <div className={styles.profile_div}>
          <div className={styles.img_div}>
            <img width={"100%"} height={"100%"} src={myPic} alt="" />
          </div>
          <div>Jhon</div>
          <div className={styles.sign_div}>
            <Link to='homeScreen' className={styles.linkDiv}>Sign In</Link>
          </div>
        </div>
      ) : null}
      <div className={styles.status_div}>
        <div className={styles.wifi_icon}>
          <i className="fa-solid fa-wifi"></i>
        </div>
        <div className={styles.battery_icon}>
          <i className="fa-solid fa-battery-half"></i>
        </div>
      </div>
    </>
  )
}

export default LockScreen
