import { createGlobalStyle } from "styled-components"

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
  body{
    -webkit-font-smoothing: antialiased;
  }
  body {
    padding:0;
    font-size: 16px;
    font-family: "IBM Plex Sans";
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
`
