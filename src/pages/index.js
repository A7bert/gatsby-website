import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my blog.</p>
    <p>This is my gatsby blog website.</p>
    <p>Need a developer <a href='https://twitter.com'>Contact on twitter</a></p>
    <p>Need a developer <Link to='/contact'>Contact me</Link></p>
  </Layout>
)

export default IndexPage
