// _app.tsx
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

import { NextPage } from 'next/types';
import { ReactElement, ReactNode, useEffect } from 'react';
import Layout from '../components/Layout';

// NextPage 의 타입과 (page: ReactElement) => ReactNode의 타입 결합
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// import 한 AppProps의 타입과 NextPageWithLayout의 타입 결합
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
