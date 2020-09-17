import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/Layout"
import {
  Container,
  ProjectList,
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
} from "./styles"

function projetos({ data }) {
  const project = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Container>
        <h1>Projetos</h1>
        <ProjectList>
          {project.map(({ node }) => (
            <ProjectItem>
              <Link to={node.fields.slug}>
                <ProjectItemImage>
                  <img
                    src={node.frontmatter.image}
                    alt={node.frontmatter.title}
                  />
                </ProjectItemImage>
                <ProjectItemTitle>{node.frontmatter.title}</ProjectItemTitle>
              </Link>
            </ProjectItem>
          ))}
        </ProjectList>
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
