import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.getColor()};
    font-family: ${({ theme }) => theme.getFont()};
  }

  button[class] {
    font: inherit;
  }

  a[class] {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Jost', sans-serif;
  }
`;
