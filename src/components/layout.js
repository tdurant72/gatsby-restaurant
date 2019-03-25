import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./globals/navbar/Navbar"
import Footer from '../components/globals/Footer'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
