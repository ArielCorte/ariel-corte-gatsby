import React from "react"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import GlobalStyle from "./GlobalStyle.jsx"
import Fonts from "../fonts/Fonts.jsx"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <GlobalStyle />
      <Fonts />
    </>
  )
}

export default Layout
