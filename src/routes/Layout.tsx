import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <header>foo</header>
    <Outlet />
    <footer>mediastore accessibility check</footer>
  </>
);
