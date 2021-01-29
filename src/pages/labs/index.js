import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import { Container } from "../projetos/styles"

import ProjectListComponent from "../../components/ProjectListComponent"

function labs({ data }) {
  const labs = data.labs.edges
  return (
    <Layout>
      <Container>
        <h1>Labs</h1>
        <ProjectListComponent dataReceiver={labs} />
      </Container>
    </Layout>
  )
}

export default labs

export const query = graphql`
  query {
    labs: allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: "labs" } } }
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

// export const query = graphql`
//   query IndexProjects {
//     allMarkdownRemark(
//       filter: { frontmatter: { categories: { eq: "Projetos" } } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             image
//           }
//         }
//       }
//     }
//   }
// `
