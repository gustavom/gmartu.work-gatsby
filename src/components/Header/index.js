import React from "react"

import { Container } from "./styles"

import Navigation from "../Navigation"

function Header() {
  return (
    // <Container
    //   contentOffsetY={20}
    //   id="header-el"
    //   data-scroll
    //   data-scroll-repeat="true"
    //   data-scroll-offset="50%"
    // >
    <Container
      contentOffsetY={20}
      id="header-el"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#main-el"
    >
      <Navigation />
    </Container>
  )
}

export default Header
