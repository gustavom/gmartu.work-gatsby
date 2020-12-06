import styled from "styled-components"

export const Container = styled.section`
  padding: 4.5rem 1.6rem 1.6rem;
`

export const ProjectList = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 250px;
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
  @media (min-width: 900px) {
    &:first-child {
      grid-row: span 2;
      grid-row: span 2 / auto;
      img {
        width: auto;
        height: 200%;
      }
    }
  } ;
`

export const ProjectItemImage = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  /* padding-bottom: 70%; */
  overflow: hidden;
  img {
    width: 102%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    img {
      width: auto;
      height: 200%;
    }
  }
`
export const ProjectItemTitle = styled.div`
  position: absolute;
  top: 0;
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
