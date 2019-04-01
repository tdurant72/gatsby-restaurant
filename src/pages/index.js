import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import Gallery from "../components/HomePageComponents/Gallery-1"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`restaurant`, `eatery`, `quality`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="123 main street, Brooklyn">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
