import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  min-height: 110vh;
  padding: 7.5rem 4rem 1.6rem;
  /* padding: 4.5rem 1.6rem 1.6rem; */
  h1 {
    /* font-size: 50px;
    font-weight: 600; */
    font-size: 70px;
    font-weight: 900;
  }
  p {
    font-size: 1.6rem;
    & + p {
      padding-top: 30px;
    }
  }
`
export const ColLeft = styled.div`
  flex: 0 0 70%;
  max-width: 70%;
  order: 2;
`
export const ColRight = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  order: 1;
  padding-top: 77px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      font-size: 20px;
      a {
        color: #000;
        text-decoration: none;
      }
      & + li {
        margin-top: 15px;
      }
    }
  }
`
