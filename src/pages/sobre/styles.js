import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  padding: 7.5rem 1.6rem 1.6rem;
  /* padding: 4.5rem 1.6rem 1.6rem; */
  h1 {
    font-size: 50px;
    font-weight: 600;
  }
  p {
    font-size: 1.6rem;
    & + p {
      padding-top: 30px;
    }
  }
`
