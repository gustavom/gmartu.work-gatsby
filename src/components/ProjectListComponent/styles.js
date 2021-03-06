import { memo } from "react"
import styled from "styled-components"

export const ProjectList = styled.div`
  position: relative;
  padding: 80px 55px;
  /* &:hover {
    article {
      opacity: 0.1;
    }
  } */
  &.initial-layout {
    & > article > a > div:nth-child(2) {
      transition: opacity 0.3s ease-in-out;
    }
    &:hover {
      & > article > a > div:nth-child(2) {
        opacity: 0.05;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`

export const ProjectItem = memo(styled.article`
  /* position: relative; */
  width: 100%;
  /* background-color: rgb(0, 0, 0, 0.1); */
  /* border-bottom: solid 4px black; */
  /* margin-bottom: 5px; */
  a {
    text-decoration: none;
    color: #000;
    & > div:nth-child(2) {
      padding-bottom: 5px;
    }
  }

  .fade-animation & > a > div:nth-child(2) {
    transition: opacity 0.3s ease-in-out;
    /* outline: solid 1px red; */
    opacity: 0.05;
    &.fade-out {
      opacity: 0.05;
    }
    &.fade-in {
      /* outline: solid 1px green; */
      opacity: 1;
    }
  }
  /* &:hover {
  opacity: 1 !important;
} */
`)

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
  /* width: 58.33333%; */
  width: 48.33333%;
  height: 550px;
  min-height: 100px;
  max-height: 70vh;
  margin-top: 10vh;
  margin-left: 0;
  margin-right: 0;
  top: 0;
  right: 0;
  overflow: hidden;
  /* z-index: 10; */
  z-index: -1;
  /* opacity: 0; */
  transition: opacity 100ms ease-in;
  background-color: red;
  opacity: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &.active {
    opacity: 1;
  }
`

export const ProjectItemTitle = styled.div`
  text-transform: capitalize;
  /* font-weight: 500; */
  font-weight: 400;
  font-size: clamp(38px, 4vw, 62px);
  line-height: 1.3;
  display: inline-block;
  /* text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  } */
`
