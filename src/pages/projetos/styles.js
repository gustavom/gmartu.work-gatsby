import styled from "styled-components"

export const Container = styled.section`
  padding: 4.5rem 1.6rem 1.6rem;
`

export const ProjectList = styled.div``

export const ProjectItem = styled.article`
  width: 100%;
  /* background-color: rgb(0, 0, 0, 0.1); */
  border-bottom: solid 4px black;
  font-weight: 500;
  font-size: 4vw;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: black;
  }
`

export const ProjectItemImage = styled.div`
  display: none;
  ${ProjectItem}:hover & {
    display: block;
    position: fixed;
    width: 40%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 10;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export const ProjectItemTitle = styled.div``
