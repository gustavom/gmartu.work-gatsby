import React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"

import { motion } from "framer-motion"

function Navigation() {
  const navigationAnimation1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 1.5 } },
  }
  const navigationAnimation2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 1.7 } },
  }
  const navigationAnimation3 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 1.9 } },
  }

  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            gustavo <br />
            martusewicz
          </Link>
        </li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={navigationAnimation1}
        >
          <Link to="/projetos">projetos</Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={navigationAnimation2}
        >
          <Link to="/labs">labs</Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={navigationAnimation3}
        >
          <Link to="/sobre">sobre</Link>
        </motion.li>
      </ul>
    </Container>
  )
}

export default Navigation
