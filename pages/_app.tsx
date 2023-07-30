import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import RootLayout from "../layouts";
import "../styles/index.css";

import { SubscriptionProvider } from "use-stripe-subscription";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Create a new supabase browser client on every first render.

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SubscriptionProvider
        stripePublishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </SubscriptionProvider>
    </>
  );
}
