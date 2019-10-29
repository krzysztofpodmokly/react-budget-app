import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    min-height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    padding: 30px;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
`;

export default GlobalStyle;
