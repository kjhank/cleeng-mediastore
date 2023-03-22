import { Layout } from '@/routes';
import { RouteObject } from 'react-router-dom';
// @ts-ignore
import { MyAccount } from '@cleeng/mediastore-sdk';
import { ErrorPage } from '@/routes/Error';

export const routerConfig: Array<RouteObject> = [
  {
    children: [
      {
        element: <>components</>,
        path: 'components?/:componentName',
      },
      {
        element: <MyAccount />,
        path: 'account',
      },
    ],
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
];
