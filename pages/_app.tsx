import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import RootLayout from "../layouts";
import "../styles/index.css";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../utils/google-analytics";
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');`}
            </Script>

            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
