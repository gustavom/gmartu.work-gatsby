import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { HomeContainer } from "./styles"
import VanillaTilt from "vanilla-tilt"

import { motion } from "framer-motion"

import SEO from "../components/SEO"

import ProjectListComponent from "./../components/ProjectListComponent"

import GlobalStyles from "./styles"

export default function Home({ data }) {
  // const [letters, setLetters] = useState([])
  const [onAnimations, setOnAnimations] = useState("")
  useEffect(() => {
    console.log("mount home")
    VanillaTilt.init(document.querySelectorAll(".letter"), {
      max: 40,
      speed: 400,
    })
  })

  const project = data.portfolio.edges

  const container = {
    hidden: { x: -1000, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", staggerChildren: 0.1, delayChildren: 0.9 },
    },
  }

  const item = {
    hidden: { x: -1000, opacity: 0 },
    show: { x: 0, opacity: 1 },
  }

  return (
    <Layout>
      <GlobalStyles />
      <SEO />
      <HomeContainer
        id="home-container"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-offset="45%"
        data-scroll-target="#project-list"
      >
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className={onAnimations}
        >
          <motion.span
            variants={item}
            className="letter"
            data-tilt
            data-tilt-reset="false"
          >
            F
          </motion.span>
          <motion.span variants={item} className="letter">
            r
          </motion.span>
          <motion.span
            variants={item}
            className="letter"
            data-tilt
            data-tilt-reset="false"
          >
            o
          </motion.span>
          <motion.span variants={item} className="letter">
            n
          </motion.span>
          <motion.span variants={item} className="letter">
            t
          </motion.span>
          <motion.span variants={item} className="letter">
            -
          </motion.span>
          <motion.span
            variants={item}
            className="letter"
            data-tilt
            data-tilt-reset="false"
          >
            E
          </motion.span>
          <motion.span variants={item} className="letter">
            n
          </motion.span>
          <motion.span
            variants={item}
            className="letter"
            data-tilt
            data-tilt-reset="false"
          >
            d
          </motion.span>
          <div className="developer">
            <motion.span variants={item} className="letter">
              D
            </motion.span>
            <motion.span
              variants={item}
              className="letter"
              data-tilt
              data-tilt-reset="false"
            >
              e
            </motion.span>
            <motion.span variants={item} className="letter">
              v
            </motion.span>
            <motion.span variants={item} className="letter">
              e
            </motion.span>
            <motion.span variants={item} className="letter">
              l
            </motion.span>
            <motion.span
              variants={item}
              className="letter"
              data-tilt
              data-tilt-reset="false"
            >
              o
            </motion.span>
            <motion.span variants={item} className="letter">
              p
            </motion.span>
            <motion.span variants={item} className="letter">
              e
            </motion.span>
            <motion.span
              variants={item}
              className="letter"
              data-tilt
              data-tilt-reset="false"
            >
              r
            </motion.span>
          </div>
        </motion.h1>
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
