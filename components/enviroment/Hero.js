import React from 'react'
import ArrowButton from "../microComponents/ArrowButton"
import style from "../../styles/components/hero.module.css"
const Hero = () => {
  return (
    <section className={style.hero}>
        <div className={style.hero__text}>
            <span className={style.subtitle}>LAST MONTH&apos;S FEATURED STORY</span>
            <h1 className={style.title}>HAZZY FULL MOON OF APPALACHIA</h1>
            <p className={style.info}>
                <span >March 2nd 2020</span>
                <span className={style.author}>by John Appleseed</span>
            </p>
            <p>
            The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains&quot;, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
            </p>
            <ArrowButton text='Get An Invite' isBlack={false}/>
        </div>
    </section>
  )
}

export default Hero