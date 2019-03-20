import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"
const ContactPage = () => (
  <Layout>
    <SEO title="About" keywords={[`restaurant`, `eatery`, `quality`]} />
    <PageHeader img={contactImg}>
      <Banner title="contact" subtitle="keep in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
