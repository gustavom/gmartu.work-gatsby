import { createGlobalStyle } from "styled-components"
import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.css"
export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    padding:0;
    font-size: 16px;
    /* font-family: "IBM Plex Sans"; */
    font-family: "Inter",sans-serif;
    font-weight: 400;
    &:before{
      content: '';
      display: block;
      z-index: 99999;
      position: fixed;
      width:100%;
      height: 100vh;
      background-color: #000;
      animation: lose-height-up 0.9s cubic-bezier(0.42, 0, 0, 1.24) both;
    }
  }
  input, button, textarea,select{
    font-family: "Inter",sans-serif;
    font-weight: 400;
  }
  h1{
    font-weight: 600;
    font-size: 2rem;
    padding:0 0 1rem;
    margin:0 0 1rem;
    border-bottom: solid 1px #222
  }
  p{
    font-size: 1.2rem;
    line-height:1.5
  }

  @keyframes lose-height-up {
  from {
    max-height:100%;
  }

  to {
    max-height: 0%;
  }
}
`
