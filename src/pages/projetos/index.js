import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../../components/Layout"
import {
  Container,
  ProjectList,
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
} from "./styles"

function projetos({ data }) {
  console.log(data)
  const project = data.portfolio.edges
  return (
    <Layout>
      <Container>
        <h1>Projetos</h1>
        <ProjectList>
          {project.map(({ node }) => (
            <ProjectItem key={node.fields.slug}>
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
