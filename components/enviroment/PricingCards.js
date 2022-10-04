import React from 'react'
import style from "../../styles/components/pricingCard.module.css"
const PricingCards = ({middle = false, header = "Basic", text = "Includes basic usage of our platform. Recommended for new and aspiring photographers.", price = {perM: 19.99, perY:190.00}, isYearly = false}) => {
  return (
    <div className={`${style.card} ${middle ? style.middle : ""}`}>
      <header className={style.card__header}>
        {header}
      </header>
      <p className={style.card__text}>
        {text}
      </p>
      <p className={style.card__price}>${isYearly ? price.perY : price.perM}</p>
      <p className={style.card__pricetext}>{isYearly ? "per year" : "per month"}</p>
      <button  className={`${style.card__btn} ${middle ? style.middle__btn : ""}`}>pick plan</button>
    </div>
  )
}

export default PricingCards