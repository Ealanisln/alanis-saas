import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import RootLayout from "../layouts";
import "../styles/index.css";
import { NextIntlClientProvider } from "next-intl";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Create a new supabase browser client on every first render.

  return (
    <>
      <NextIntlClientProvider messages={pageProps.messages}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
