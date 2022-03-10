import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eeeeee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .container {
    max-width: 933px;
    margin: 0 auto;
    background: #eeeeee;
  }

`;

export default GlobalStyle;
