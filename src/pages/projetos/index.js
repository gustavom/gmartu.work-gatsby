import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import { Container } from "./styles"

function projetos({ data }) {
  const project = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Container>
        <h1>Projetos</h1>
        {project.map(({ node }) => (
          <li>
            {node.fields.slug}
            <br />
            {node.frontmatter.title}
            <br />
            <img src={node.frontmatter.image} />
          </li>
        ))}
      </Container>
    </Layout>
  )
}

export default projetos

export const query = graphql`
  query IndexProjects {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "Projetos" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`