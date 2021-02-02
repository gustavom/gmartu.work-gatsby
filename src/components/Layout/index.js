import React, { useEffect } from "react"

import { Main } from "./styles"

import Header from "../Header"

import GlobalStyle from "../global-styles"
// import { AnimatePresence, motion } from "framer-motion"

import locomotiveScroll from "locomotive-scroll"

function Layout({ children }) {
  useEffect(() => {
    console.log("mount layout base")
  }, [])

  const scrollRef = React.createRef()

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  }, [])

  return (
    <>
      <Main ref={scrollRef} id="main-el">
        <Header />
        <GlobalStyle />
        <>{children}</>
      </Main>
    </>
  )
}

export default Layout
