import styled from 'styled-components';

export const NavigationNode = styled.nav`
  margin-block: 2em 4em;
`;

export const ItemsList = styled.menu`
  display: grid;
  grid-template: auto / repeat(auto-fit, minmax(20ch, 1fr));
  gap: 1em;
`;
