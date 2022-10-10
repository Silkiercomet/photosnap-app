import React from 'react'
import Presentation from '../../components/enviroment/Presentation'
import PricingBoard from '../../components/enviroment/PricingBoard'

const Pricing = () => {
  return (
    <>
      <Presentation 
      header="PRICING"
      text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      img="/images/pricing-bg.jpg"
      />
      <PricingBoard />
    </>
  )
}

export default Pricing