import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Dashboard = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `
          "header header"
          "sidebar main"
        `,
        height: '100vh',
        gap: 0,
      }}
    >
      <Box sx={{ gridArea: 'header', mb: '50px' }}>
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'sidebar',
          height: '100%',
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          gridArea: 'main',
          height: '100%',
          overflow: 'auto',
          //Add the route when use the Banner component
          padding: location.pathname === '/account' ? 0 : '42px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
