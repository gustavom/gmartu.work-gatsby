import styled from "styled-components"

export const Container = styled.nav`
  /* border-bottom: solid 1px #222; */
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    li {
      /* flex: 0 0 25%; */
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
      &:first-child {
        text-align: left;
      }
      &:not(:last-child) {
        /* border-right: solid 1px #222; */
      }
      a {
        color: #222;
        text-decoration: none;
      }
    }
  }
`
