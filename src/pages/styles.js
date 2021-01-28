import styled from "styled-components"

export const Container = styled.div``

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  h1 {
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 20vw;
    font-weight: 800;
    white-space: nowrap;
    letter-spacing: -0.5vw;
    span.letter {
      display: inline-block;
    }
    span.developer {
      margin-top: -8.3vw;
      font-size: 19.7vw;
      display: block;
      letter-spacing: -0.7vw;
    }
  }
`
