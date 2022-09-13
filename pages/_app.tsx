// _app.tsx
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import theme from "../styles/theme";

import { NextPage } from "next/types";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
