import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../../components/Layout"
import { Container } from "./styles"

import ProjectListComponent from "../../components/ProjectListComponent"

function projetos({ data }) {
  console.log(data)
  const project = data.portfolio.edges
  return (
    <Layout>
      <Container>
        <h1>Projetos</h1>
        <ProjectListComponent dataReceiver={project} />
      </Container>
    </Layout>
  )
}

export default projetos

export const query = graphql`
  query {
    portfolio: allMarkdownRemark(
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
    # labs: allMarkdownRemark(
    #   filter: { frontmatter: { categories: { eq: "labs" } } }
    # ) {
    #   edges {
    #     node {
    #       fields {
    #         slug
    #       }
    #       frontmatter {
    #         title
    #         image
    #       }
    #     }
    #   }
    # }
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
