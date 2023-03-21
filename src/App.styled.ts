import styled, { css, keyframes } from 'styled-components';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    ${css`
    animation: ${AppLogoSpin} infinite 20s linear;
    `}
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);
`;

export const Link = styled.a`
  color: #61dafb;
`;
