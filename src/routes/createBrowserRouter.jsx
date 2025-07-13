import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from '@pages/home';
import { Post } from '@pages/post';
import { Unauthorized } from '@pages/unauthorized';
import { ROUTES, PrivateRoute } from '@routes';

// eslint-disable-next-line no-unused-vars
const createPrivateRoute = Component => {
  return (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTES.HOME} element={createPrivateRoute(Home)} /> */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
      <Route path={ROUTES.POST} element={<Post />} />
    </>
  ),
  { basename: '/app' }
);
