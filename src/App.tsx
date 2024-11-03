import './App.css';

// import { StoreProvider } from "./common/StoreProvider";
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterProvider } from './common/AppRouterProvider';
import { ThemeProvider } from '@mui/material';
import { createDefaultTheme } from './assets/themes/createDefaultTheme';

export function App() {
  const theme = createDefaultTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouterProvider />
    </ThemeProvider>
  );
}
