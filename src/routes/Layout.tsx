import { Container } from '@/components/styled';
import { Outlet } from 'react-router-dom';
import { AppNavigation } from '../features/AppNavigation/AppNavigation';

export const Layout = () => (
  <>
    <header>
      <Container>
        <h1>Component accessibility review</h1>
      </Container>
    </header>
    <AppNavigation />
    <Outlet />
  </>
);
