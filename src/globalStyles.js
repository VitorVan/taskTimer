import { createGlobalStyle } from 'styled-components';

import font from './assets/Montserrat-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: local('Montserrat'), local('Montserrat'),
    url(${font}) format('ttf'),
}

  body {
    background: FBFBFB;
    color: #222222;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
