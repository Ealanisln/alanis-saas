import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'
import RootLayout from "../layouts";

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">

      <RootLayout>
      <Component {...pageProps} />
      </RootLayout>
      </ThemeProvider>

    </>
  );
}