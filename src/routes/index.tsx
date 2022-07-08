import { Routes, Route, RouteProps } from 'react-router-dom';

import { Login } from 'pages';

interface RouterListProps extends RouteProps {
  routname: string;
  isPrivate?: boolean;
}

const routerList: RouterListProps[] = [
  {
    routname: 'Login',
    element: <Login />,
    isPrivate: false,
    path: '/login',
  },
];

export const Router = () => (
  <Routes>
    {routerList.map(route => (
      <Route key={route.routname} {...route} />
    ))}
  </Routes>
);
