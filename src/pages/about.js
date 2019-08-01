import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nesciunt
        dolor quasi possimus exercitationem nihil atque culpa inventore beatae
        nulla ipsa, labore sequi cum voluptates quae vero, eveniet quia
        repudiandae.
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
