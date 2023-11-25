import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    paddng: 0;
    box-sizing:borde-box;
  }
  :focus{
    cutline:0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']}
  }
  body {
    background-color:${props => props.theme['gray-800']}
    color:${props => props.theme['gray-100']}
    -webkit-font-smoothing: antiaLiased;
  }
  body ,input ,testarea, button {
    font:400 1rem Roboto, sans-serif;
  }

`;