import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container } from "./styles"

import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Container>Hello world!</Container>
    </Layout>
  )
}
