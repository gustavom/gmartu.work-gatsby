import styled from "styled-components"

export const Container = styled.section`
  padding: 4.5rem 1.6rem 1.6rem;
`

export const ProjectList = styled.div`
  position: relative;
`

export const ProjectItem = styled.article`
  /* position: relative; */
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
  /* display: block;
  position: absolute;
  width: 40%;
  height: 100vh;
  margin-top: 20vh;
  max-height: 60vh;
  top: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  transition: opacity 100ms ease-in;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${ProjectItem}:hover & {
    opacity: 1;
  } */
`
export const ProjectStickImage = styled.div`
  position: absolute;
  width: 58.33333%;
  margin-top: 10vh;
  margin-left: 0;
  margin-right: 0;
  top: 0;
  right: 0;
  min-height: 100px;
  max-height: 60vh;
  overflow: hidden;
  z-index: 10;
  /* opacity: 0; */
  transition: opacity 100ms ease-in;
  background-color: red;
  opacity: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.active {
    opacity: 1;
  }
`

export const ProjectItemTitle = styled.div``
