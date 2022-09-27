import React from 'react'
import style from "../../styles/components/infocard.module.css"
import Image from "next/image"
const InfoCard = ({img = "/images/embed.svg", title = "Available to Embed", text = "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."}) => {
  return (
    <div className={style.card}>
        <figure>
            <Image src={img} height={72} width={72} />
        </figure>
        <p className={style.header}>{title}</p>
        <p className={style.para}>{text}</p>
    </div>
  )
}

export default InfoCard