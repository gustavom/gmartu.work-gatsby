import styled from "styled-components"

export const Container = styled.nav`
  border-bottom: solid 1px #222;
  ul {
    list-style: none;
    display: flex;
    li {
      flex: 0 0 33.33%;
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      &:not(:last-child) {
        border-right: solid 1px #222;
      }
      a {
        color: #222;
        text-decoration: none;
      }
    }
  }
`
