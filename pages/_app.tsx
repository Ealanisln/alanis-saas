import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import RootLayout from "../layouts";
import "../styles/index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { MyUserContextProvider } from "@/utils/useUser";
import type { Database } from "types_db";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </ThemeProvider>
        </MyUserContextProvider>
      </SessionContextProvider>
    </>
  );
}
