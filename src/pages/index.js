import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { HomeContainer } from "./styles"
import VanillaTilt from "vanilla-tilt"

import SEO from "../components/SEO"

import ProjectListComponent from "./../components/ProjectListComponent"

export default function Home({ data }) {
  useEffect(() => {
    console.log("mount")
    VanillaTilt.init(document.querySelectorAll(".letter"), {
      max: 40,
      speed: 400,
    })
  })

  const project = data.portfolio.edges

  return (
    <Layout>
      <SEO />
      <HomeContainer
        id="home-container"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-offset="50%"
        data-scroll-target="#project-list"
      >
        <h1>
          <span className="letter" data-tilt data-tilt-reset="false">
            F
          </span>
          r
          <span className="letter" data-tilt data-tilt-reset="false">
            o
          </span>
          nt-
          <span className="letter" data-tilt data-tilt-reset="false">
            E
          </span>
          n
          <span className="letter" data-tilt data-tilt-reset="false">
            d
          </span>
          <span className="developer">
            D
            <span className="letter" data-tilt data-tilt-reset="false">
              e
            </span>
            vel
            <span className="letter" data-tilt data-tilt-reset="false">
              o
            </span>
            pe
            <span className="letter" data-tilt data-tilt-reset="false">
              r
            </span>
          </span>
        </h1>
      </HomeContainer>

      <ProjectListComponent dataReceiver={project} />
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
