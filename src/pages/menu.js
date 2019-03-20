import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
const MenuPage = () => (
  <Layout>
    <SEO title="About" keywords={[`restaurant`, `eatery`, `quality`]} />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`authentic italian with a twist`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
