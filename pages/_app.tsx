// _app.tsx
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
