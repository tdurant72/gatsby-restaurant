import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`restaurant`, `eatery`, `quality`]} />
    <h3>Home</h3>
  </Layout>
)

export default IndexPage
