import React from 'react'
import Presentation from '../../components/enviroment/Presentation'
import PricingCards from '../../components/enviroment/PricingCards'
import Switch from '../../components/microComponents/Switch'

const Pricing = () => {
  return (
    <>
      <Presentation 
      header="PRICING"
      text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      img="/images/pricing-bg.jpg"
      />
      <div>
        <Switch />
        <PricingCards />
      </div>
    </>
  )
}

export default Pricing