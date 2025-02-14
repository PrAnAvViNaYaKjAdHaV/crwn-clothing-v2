/** @format */

import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 20px 40px;
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media screen and (max-width:400px) {
      padding: 10px 20px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`;
