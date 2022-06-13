import { createGlobalStyle, css } from "styled-components";

const ResetCSS = css`
  // variables
  :root {
    --red: #ff3838;
  }

  // resets
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style-type: none;
    text-decoration: none;
    font-family: sans-serif;
  }

  *::selection {
    background: var(--red);
    color: #fff;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 6rem;
  }

  body {
    background: #f7f7f7;
  }
`;

const BaseCSS = createGlobalStyle`
    ${ResetCSS}
`;

export const GlobalStyle = () => <BaseCSS />;
