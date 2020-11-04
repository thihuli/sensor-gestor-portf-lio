import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html,
  body, 
  #__next {
    width: 100vw;
    height: 100vh;

    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;


    margin: 0;
    padding: 0;
  }

  button{
    border: none;
    outline: none;
    cursor: pointer;
  }

  label{
        font-size: 20px;
        line-height: 24px;
        color: #B0AEAE;
        margin-bottom:12px;
        display:inline-block;

  }
`;

export default GlobalStyles;