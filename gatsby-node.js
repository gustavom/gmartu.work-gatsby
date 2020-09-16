// post guide https://www.gatsbyjs.com/tutorial/part-seven/5
// https://desktopofsamuel.com/building-gatsby-with-multiple-post-type
const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

const blogPost = path.resolve(`./src/templates/blog-post.js`)
const projectPage = path.resolve(`./src/templates/project-page.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              categories
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.frontmatter.categories[0])
    if (node.frontmatter.categories[0] === "Projetos") {
      createPage({
        path: node.fields.slug,
        component: projectPage,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}
