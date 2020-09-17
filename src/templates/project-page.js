import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function ProjectPage({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <div>
        <small>project template</small>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ProjectPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
