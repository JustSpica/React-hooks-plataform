import { Routes, Route, RouteProps } from 'react-router-dom';

import { Login, Event } from 'pages';

import { PrivateRoute } from './private';
interface RouterListProps extends RouteProps {
  routname: string;
}

const routerList: RouterListProps[] = [
  {
    routname: 'Login',
    element: <Login />,
    path: '/login',
  },
  {
    routname: 'Event',
    element: (
      <PrivateRoute redirectTo="/login">
        <Event />
      </PrivateRoute>
    ),
    path: '/',
  },
];

export const Router = () => (
  <Routes>
    {routerList.map(route => (
      <Route key={route.routname} {...route} />
    ))}
  </Routes>
);
