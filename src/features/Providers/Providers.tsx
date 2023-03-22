import { WithChildrenProps } from '@/static';
import { Theme } from '@/theme';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import { routerConfig } from './config';

export const Providers = ({ children, store }: WithChildrenProps<{ store: Store }>) => {
  const router = createBrowserRouter(routerConfig);

  return (
    <Provider store={store}>
      <Theme>
        <RouterProvider router={router} />
        {children}
      </Theme>
    </Provider>
  );
};
