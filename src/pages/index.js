import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="RoveBe" />
    <div className='title'>
      <h1>RoveBe</h1>
      <p>Launching Q3 of 2019</p>
    </div>
  </Layout>
)

export default IndexPage
