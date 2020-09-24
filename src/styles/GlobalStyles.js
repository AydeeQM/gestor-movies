import { createGlobalStyle } from 'styled-components'
import HelveticaNeueLight from 'assets/fonts/Helvetica_Neue_Light.ttf'
import HelveticaNeue from 'assets/fonts/HelveticaNeue.ttf'
import HelveticaNeueMedium from 'assets/fonts/Helvetica_Neue_Medium.ttf'
import HelveticaNeueBold from 'assets/fonts/Helvetica_Neue_Bold.ttf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'helvetica neue light';
    src: url(${HelveticaNeueLight});
    font-style: normal;
  }

  @font-face {
    font-family: 'helvetica neue';
    src: url(${HelveticaNeue});
    font-style: normal;
  }
  
  @font-face {
    font-family: 'helvetica neue medium';
    src: url(${HelveticaNeueMedium});
    font-style: normal;
  }

  @font-face {
    font-family: 'helvetica neue bold';
    src: url(${HelveticaNeueBold});
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    font-family: 'helvetica neue light', sans-serif;
    font-size: 16px;
    margin: 0;
    overscroll-behavior: none;
  }

  /* * {
    outline: 1px solid red;
  } */

  :root {
    --white: #FFFFFF;
    --white-alt: #F2F2F2;
    --red: #F63300;
    --grey: #eaeaea;
    --gray-light: #dee5e5;
    --blue: #002867;
    --blue-hover: hsl(217, 100%, 16%);
    --dark: #575757;
    --black: #272727;
    --black-16: rgba(0, 0, 0, 0.16);

    --font: 'helvetica neue', sans-serif;
    --font-light: 'helvetica neue light', sans-serif;
    --font-medium: 'helvetica neue medium', sans-serif;
    --font-bold: 'helvetica neue bold', sans-serif;
  }
`
