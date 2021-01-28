import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { HomeContainer } from "./styles"

import SEO from "../components/SEO"
import {
  ProjectItem,
  ProjectItemImage,
  ProjectItemTitle,
  ProjectList,
  ProjectStickImage,
} from "./projetos/styles"

export default function Home({ data }) {
  const project = data.portfolio.edges

  const [projectImage, setProjectImage] = useState()

  return (
    <Layout>
      <SEO />
      <HomeContainer>
        <h1>
          Front-End
          <span>Developer</span>
        </h1>
      </HomeContainer>
      <ProjectList id="pin">
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
        <ProjectStickImage
          data-scroll
          data-scroll-sticky
          data-scroll-target="#pin"
          data-scroll-speed="3"
        />
      </ProjectList>
    </Layout>
  )
}

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
