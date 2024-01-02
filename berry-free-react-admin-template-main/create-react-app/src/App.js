
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Routes from 'routes';
import themes from 'themes';
const App = () => {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes('')}>
        <CssBaseline />
          <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
