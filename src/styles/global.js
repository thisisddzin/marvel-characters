import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0; margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Staatliches', cursive;
    /* background: rgb(226, 223, 223); */
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  @media only screen and (max-width:1000px) {
    img[alt=spiderman] {
      display: none;
    }
  }
`;

export default GlobalStyle;
