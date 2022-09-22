import React from 'react'
import ArrowButton from '../microComponents/ArrowButton'
import style from "../../styles/components/articlecard.module.css"
const ArticleCard = ({img = "/images/architecturals.jpg", author = 'samantha saint', title = "architecturals"}) => {
  return (
    <article style={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${img})`}} className={style.article__card}>
        <div className={style.article__card_info}>
            <h2 className={style.header}>{title}</h2>
            <p className={style.author}>by {author}</p>
            <div>
                <span>READ STORY</span> <ArrowButton isBlack={false} text="none"/>
            </div>
        </div>
    </article>
  )
}

export default ArticleCard