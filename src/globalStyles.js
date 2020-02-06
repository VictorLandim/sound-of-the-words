import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100%;
    height: 100%;
    color: #303030;
    /* background: #fff; */
    font-family:  Lato, sans-serif;
  }

  body {
    background: linear-gradient(to bottom, #fff, #fdfdfd);
  }
`;
