import React from 'react'
import Grid from '../../components/enviroment/Grid'
import InfoCard from '../../components/enviroment/InfoCard'
import Presentation from '../../components/enviroment/Presentation'

const Features = () => {
  return (
    <>
    <Presentation header = "FEATURES" text = 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.' img = "/images/features-bg.jpg" />
    <div style={{maxWidth : "1100px", margin: "40px auto"}}>
    <Grid>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </Grid>
    </div>
    </>
  )
}

export default Features