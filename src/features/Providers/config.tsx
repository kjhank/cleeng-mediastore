// @ts-ignore
import { Auth } from '@cleeng/mediastore-sdk';
import { Outlet, RouteObject } from 'react-router-dom';
import {
  ErrorPage, Layout,
} from '@/routes/';
import { Home } from '@/routes/Home';
import { Container } from '@/components/styled';
import { NotesWrapper } from '@/components';
import { navigationItems } from '../AppNavigation/AppNavigation.static';

export const routerConfig: Array<RouteObject> = [
  {
    children: [
      {
        children: navigationItems.map(item => ({
          element: item.requiresAuth
            ? (
              <NotesWrapper>
                {Auth.isLogged() && item.Component}
              </NotesWrapper>
            )
            : (
              <NotesWrapper>
                {item.Component}
              </NotesWrapper>
            ),
          path: item.path,
        })),
        element: (
          <Container as="main">
            <Outlet />
          </Container>),
        path: 'components',
      },
    ],
    element: <Layout />,
  },
  {
    element: <Home />,
    errorElement: <ErrorPage />,
    path: '/',
  },
];
