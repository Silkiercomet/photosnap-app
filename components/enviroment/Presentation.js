import React from 'react'
import style from "../../styles/components/presentation.module.css"
import ArrowButton from '../microComponents/ArrowButton'
const Presentation = ({header = "placeholder", text = 'lorem ipsum', isBlack = true, img = "/images/create-and-share.jpg", reverse = false}) => {
  return (
    <div className={`${style.presentation} ${reverse && style.reverse}`}>
        <article className={`${style.presentation__text} ${isBlack ? style.black : style.white}`}>
            <h1 >{header}</h1>
            <p className={`${isBlack ? style.gray : style.opaqueBlack}`}>{text}</p>
            <ArrowButton isBlack={isBlack ? false : true} text="GET AN INVITE" />
        </article>
        <figure style={{backgroundImage : `url(${img})`}}>

        </figure>
    </div>
  )
}

export default Presentation