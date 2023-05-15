import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import React, { Suspense } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const About = React.lazy(() => import('../pages/About/About'));
// eslint-disable-next-line react-refresh/only-export-components
const Download = React.lazy(() => import('../pages/Download/Download'));

const withSuspense = (children: JSX.Element) => {
  return <Suspense fallback='loading'>{children}</Suspense>;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: withSuspense(<About />),
  },
  {
    path: '/my',
  },
  {
    path: '/friend',
  },
  {
    path: '/download',
    element: withSuspense(<Download />),
  },
];
