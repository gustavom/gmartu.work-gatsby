import React from "react"

import { Main } from "./styles"

import Header from "../Header"

function Layout({ children }) {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  )
}

export default Layout
