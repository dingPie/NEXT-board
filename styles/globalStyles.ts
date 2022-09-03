import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Neo둥근모Code";
  }
  html {
    height: 100%;
  }
  body {
    margin: 0 auto;
    height: 100%;
    /* background: ${({ theme }) => theme.colors.light_gray}; */
    /* max-width: 1200px; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: ${({ theme }) => theme.colors.dark_gray};
    }
  } */

`;

export default GlobalStyle;
