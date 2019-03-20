import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`restaurant`, `eatery`, `quality`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About Us" subtitle="what makes us a unique eatery" />
    </PageHeader>
  </Layout>
)

export default AboutPage
