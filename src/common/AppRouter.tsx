import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RouteNotFound } from '../components/RouteNotFound';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';
import { Dashboard } from '../components/layouts/Dashboard';
import { Home } from '@mui/icons-material';
import { CardioPatients } from '../components/pages/CardioPatients';
import { Patients } from '../components/pages/Patients';

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
        {
          path: '/home',
          errorElement: <RouteNotFound />,
          element: <Home />,
        },
        {
          path: '/cardio_patients',
          errorElement: <RouteNotFound />,
          element: <CardioPatients />,
        },
        {
          path: '/patients',
          errorElement: <CardioPatients />,
          element: <Patients />,
        },

        {
          path: '*',
          element: <RouteNotFound />,
        },
      ],
    },
  ]);
};
