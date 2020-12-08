import React, { useEffect } from "react"

import { Main } from "./styles"

import Header from "../Header"

import GlobalStyle from "../global-styles"
// import { AnimatePresence, motion } from "framer-motion"

function Layout({ children }) {
  useEffect(() => {
    console.log("mount")
  }, [])
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <>{children}</>
    </Main>
  )
}

export default Layout
