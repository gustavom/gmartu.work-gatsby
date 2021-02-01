import styled from "styled-components"

function template(i, duration) {
  return `
      &:nth-of-type(${i + 1}) {
        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.${
          i + 1
        }s both;
       }
    `
}
function getAnimations() {
  let str = ""
  for (let index = 0; index < 18; index += 1) {
    str += template(index, index)
  }
  return str
}

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 105vh;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  transition: background-color 0.5s ease-in;
  h1 {
    transition: opacity 0.5s ease-in;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 20vw;
    font-weight: 800;
    white-space: nowrap;
    letter-spacing: -0.5vw;
    /* span {
      opacity: 0;
    } */
    &.on-animations {
      span {
        ${getAnimations()};
      }
    }
    &.end-animations {
      span {
        opacity: 1;
      }
    }
    span.letter {
      display: inline-block;
    }
    div.developer {
      margin-top: -8.3vw;
      font-size: 19.7vw;
      letter-spacing: -0.7vw;
    }
  }
  &.is-inview {
    background-color: rgba(0, 0, 0, 0.9);
    h1 {
      opacity: 0.2;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`
