import React from "react"

import { Main } from "./styles"

import Header from "../Header"

import GlobalStyle from "../global-styles"

function Layout({ children }) {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      {children}
    </Main>
  )
}

export default Layout
