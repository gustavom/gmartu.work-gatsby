import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, HomeContainer } from "./styles"

import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <HomeContainer>
        <h1>
          Front-End
          <span>Developer</span>
        </h1>
      </HomeContainer>
    </Layout>
  )
}
