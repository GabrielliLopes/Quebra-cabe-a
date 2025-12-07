import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  /* Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #1e1d1d;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 800;
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 700;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease;
  }

  /* Utility Classes */
  .text-gradient {
    background: linear-gradient(135deg, #ff7200 0%, #ff8c33 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }
`;

export default GlobalStyles;
