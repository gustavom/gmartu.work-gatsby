import styled from "styled-components"
export const Container = styled.section`
  min-height: 100vh;
  padding: 7.5rem 0 1.6rem;
  /* padding: 4.5rem 1.6rem 1.6rem; */
  h1 {
    /* font-size: 50px;
    font-weight: 600; */
    font-size: 70px;
    font-weight: 900;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`
export const TitleProject = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ProjectDataContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  padding-top: 70vh;
`
export const ProjectDataContainerInner = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 95px;
  .text {
    flex: 0 0 40%;
    padding: 50px 25px;
  }
  a {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    height: 100vh;
    border: solid 20px #ccc;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: solid 20px #ccc;
  }
`
