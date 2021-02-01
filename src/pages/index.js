import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { HomeContainer } from "./styles"
import VanillaTilt from "vanilla-tilt"

import { motion } from "framer-motion"

import SEO from "../components/SEO"

import ProjectListComponent from "./../components/ProjectListComponent"

export default function Home({ data }) {
  // const [letters, setLetters] = useState([])
  const [onAnimations, setOnAnimations] = useState("")
  useEffect(() => {
    console.log("mount home")
    VanillaTilt.init(document.querySelectorAll(".letter"), {
      max: 40,
      speed: 400,
    })
    // function setClassOnLetters() {
    //   const getLetters = [
    //     ...document.querySelectorAll("#home-container h1 span"),
    //   ]
    //   setLetters(getLetters)
    //   console.log(letters)
    // }
    // setClassOnLetters()
    // setTimeout(function () {
    //   setOnAnimations("on-animations")
    // }, 1000)
  })

  const project = data.portfolio.edges

  const animateSlideInLeft = {
    offSet: { x: -1000, opacity: 0 },
    onSet: { x: 0, opacity: 1 },
  }

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
        <h1 className={onAnimations}>
          <motion.span
            initial="offSet"
            animate="onSet"
            variants={animateSlideInLeft}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="letter"
            data-tilt
            data-tilt-reset="false"
          >
            F
          </motion.span>
          <span>r</span>
          <span className="letter" data-tilt data-tilt-reset="false">
            o
          </span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span className="letter" data-tilt data-tilt-reset="false">
            E
          </span>
          <span>n</span>
          <span className="letter" data-tilt data-tilt-reset="false">
            d
          </span>
          <div className="developer">
            <span>D</span>
            <span className="letter" data-tilt data-tilt-reset="false">
              e
            </span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span className="letter" data-tilt data-tilt-reset="false">
              o
            </span>
            <span>p</span>
            <span>e</span>
            <span className="letter" data-tilt data-tilt-reset="false">
              r
            </span>
          </div>
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
