import styled from "styled-components"

export const Container = styled.section`
  padding: 2.5rem 1.6rem 1.6rem;
`

export const ProjectList = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.2rem;
  }
`

export const ProjectItem = styled.article`
  position: relative;
  overflow: hidden;
  & > a {
    display: block;
    text-decoration: none;
    overflow: hidden;
  }
`

export const ProjectItemImage = styled.div`
  width: 100%;
  position: relative;
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;
  img {
    width: 102%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const ProjectItemTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem;
  opacity: 0;
  text-transform: lowercase;
  ${ProjectItem}:hover & {
    opacity: 1;
  }
`
