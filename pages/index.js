import Head from "next/head";
import ArticleCard from "../components/enviroment/ArticleCard";
import Presentation from "../components/enviroment/Presentation";
import Grid from "../components/enviroment/Grid";
import InfoCard from "../components/enviroment/InfoCard";
export default function Home() {
  return (
    <>
      <Head>
        <title>Photosnap</title>
        <meta name="description" content="photosnap landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Presentation
        header="CREATE AND SHARE YOUR PHOTO STORIES."
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />

      <Presentation
        header="Beautiful stories everytime."
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        img="/images/beautiful-stories.jpg"
        reverse={true}
        isBlack={false}
      />
      <Presentation
        header="Designed for everyone."
        text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        img="/images/designed-for-everyone.jpg"
      />
      <main>
        <Grid>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Grid>
      </main>
      <div style={{ maxWidth: "1800px", margin: "40px auto" }}>
        <Grid>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Grid>
      </div>
    </>
  );
}
