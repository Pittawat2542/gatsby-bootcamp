import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header></Header>
      {props.children}
    </div>

    <Footer></Footer>
  </div>
)

export default Layout
