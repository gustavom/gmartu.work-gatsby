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
`
