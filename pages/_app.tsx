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
      <NextIntlClientProvider
        messages={pageProps.messages}
        onError={(error) => {
          if (error.code === "MISSING_MESSAGE") {
            // Handle the missing message error here
            console.error(`Missing message for key: ${error.message}`);
            // You can provide a default message or perform some other action
            // For example, you could set a default message in the UI.
            // Or you could send an error report to your server for further analysis.
          } else {
            // Handle other types of errors here
            console.error("An error occurred:", error);
          }
        }}
      >
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
