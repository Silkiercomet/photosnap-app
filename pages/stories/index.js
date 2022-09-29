import React from 'react'
import Grid from '../../components/enviroment/Grid'
import Hero from '../../components/enviroment/Hero'
import ArticleCard from '../../components/enviroment/ArticleCard'
import { getData, getPath } from "../../utils/functions"
const Stories = (props) => {

  return (
    <>
    <Hero />
    <Grid>
          {props.articles.map((e,i) => <ArticleCard key={i} img={e.image} author = {e.Author} title = {e.title}/>)}
    </Grid>
    </>
  )
}

export default Stories

export async function getStaticProps(context) {
  const filepath = getPath()
  const data = getData(filepath)

  const articleCard = data.articles

  return {
    props: {
      articles:articleCard
    }
  }
}