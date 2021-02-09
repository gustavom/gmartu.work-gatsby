import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import {
  Container,
  TitleProject,
  ProjectDataContainer,
  ProjectDataContainerInner,
} from "./project-page-style"

export default function ProjectPage({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <Container id="fixed-elements">
        <TitleProject
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-elements"
        >
          {post.frontmatter.title}
        </TitleProject>
        <ProjectDataContainer>
          <ProjectDataContainerInner>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <a href={post.frontmatter.link} target="_blank">
              <img
                src={post.frontmatter.image}
                alt={post.frontmatter.title.toLowerCase()}
              />
            </a>
          </ProjectDataContainerInner>
        </ProjectDataContainer>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query ProjectPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        link
      }
    }
  }
`
