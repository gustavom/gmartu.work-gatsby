import React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"

import { motion, useTransform, useViewportScroll } from "framer-motion"

function Navigation() {
  const { scrollYProgress } = useViewportScroll()
  console.log({ scrollYProgress })
  const frameOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0])

  return (
    <Container data-scroll data-scroll-sticky data-scroll-target="#main-el">
      <motion.ul
        style={{
          opacity: frameOpacity,
        }}
      >
        <li>
          <Link to="/">
            Gustavo <br />
            Martusewicz
          </Link>
        </li>
        <li>
          <Link to="/projetos">projetos</Link>
        </li>
        <li>
          <Link to="/labs">labs</Link>
        </li>
        <li>
          <Link to="/sobre">sobre</Link>
        </li>
      </motion.ul>
    </Container>
  )
}

export default Navigation
