import {useState} from 'react'
import style from "../../styles/components/switch.module.css"
const Switch = ({isYearly, setIsYearly}) => {

  const handleClick = () => {
    setIsYearly(!isYearly)
  }
  return (
    <div className={style.switch}>
        <span className={style.switch__text}>Monthly</span>
        <div className={style.switch__interact} onClick={handleClick}>
            <div className={`${style.switch__interact_button} ${isYearly ? style.switch__interact_active : style.switch__interact_inactive }`}></div>
        </div>
        <span className={style.switch__text}>Yearly</span>
    </div>
  )
}

export default Switch