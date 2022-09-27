import React from 'react'
import style from "../../styles/components/banner.module.css"
import ArrowButton from '../microComponents/ArrowButton'

const Banner = () => {
  return (
    <div className={style.banner}>
        <header>
            <h4 className={style.header}>WE'RE IN BETA.
GET YOUR INVITE TODAY!</h4>
        </header>
        <ArrowButton isBlack={false} text="Get an invite" />
    </div>
  )
}

export default Banner