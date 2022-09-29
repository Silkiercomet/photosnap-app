import React from 'react'
import Grid from '../../components/enviroment/Grid'
import InfoCard from '../../components/enviroment/InfoCard'
import Presentation from '../../components/enviroment/Presentation'
import Banner from '../../components/enviroment/Banner'
import { getData, getPath } from "../../utils/functions"

const Features = (props) => {
  return (
    <>
    <Presentation header = "FEATURES" text = 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.' img = "/images/features-bg.jpg" />
    <div style={{maxWidth : "1100px", margin: "40px auto"}}>
    <Grid>
     {props.info.map((e,i) => <InfoCard img={e.image} title={e.title} text={e.text} />)}
    </Grid>
    </div>
    <Banner />
    </>
  )
}

export default Features

export async function getStaticProps(context) {
  const filepath = getPath()
  const data = getData(filepath)

  const InfoCard = data.info

  return {
    props: {
      info: InfoCard
    }
  }
}