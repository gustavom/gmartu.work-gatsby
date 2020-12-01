import React, { useEffect } from "react"

import { Main } from "./styles"

import Header from "../Header"

import GlobalStyle from "../global-styles"
import { AnimatePresence, motion } from "framer-motion"

function Layout({ children }) {
  useEffect(() => {
    console.log("mount")
  }, [])
  return (
    <AnimatePresence>
      <Main>
        <GlobalStyle />
        <Header />
        <motion.div exit={{ opacity: 0 }}>{children}</motion.div>
      </Main>
    </AnimatePresence>
  )
}

export default Layout
