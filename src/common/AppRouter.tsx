import { createBrowserRouter, Outlet } from 'react-router-dom';

import { RouteNotFound } from '../components/RouteNotFound';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';
import { Dashboard } from '../components/layouts/Dashboard';
// import PatientsList from '../components/pages/PatientList';

export const AppRouter = () => {
  const ErrorBoundaryLayout = () => (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <Outlet />
    </ErrorBoundary>
  );

  return createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      errorElement: <ErrorBoundaryLayout />,
      children: [
        // {
        //   path: '/patients',
        //   element: <PatientsList />,
        // },
        {
          path: '/home',
          element: <RouteNotFound />,
          // element: <Home />,
        },
        {
          path: '*',
          element: <RouteNotFound />,
        },
      ],
    },
  ]);
};
