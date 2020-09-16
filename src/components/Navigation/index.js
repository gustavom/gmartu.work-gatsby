import React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"

function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">gmartu</Link>
        </li>
        <li>
          <Link to="/projetos">projetos</Link>
        </li>
        <li>
          <Link to="/sobre">sobre</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Navigation
