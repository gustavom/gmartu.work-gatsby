import React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"

function Navigation() {
  return (
    <Container>
      <ul>
        <li>gmartu</li>
        <li>projeto</li>
        <li>
          <Link to="/sobre">sobre</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Navigation
