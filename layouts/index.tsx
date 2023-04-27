import type { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <Head>
        <title>Welcome to Alanis Web Design</title>
        <meta
          name="description"
          content="Estudia con nosotros para obtener tu licencia de conducir de una manera rápida y fácil."
        />
        <link rel="canonical" href="https://conducir-es-facil.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Course Landing Page" />
        <meta
          property="og:description"
          content="Estudia con nosotros para obtener tu licencia de conducir de una manera rápida y fácil."
        />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta
          property="og:url"
          content="https://conducir-es-facil.vercel.app/"
        />
        <meta property="og:site_name" content="Conducir es fácil" />
        <meta name="twitter:title" content="Conducir es fácil" />
        <meta
          name="twitter:description"
          content="Estudia con nosotros para obtener tu licencia de conducir de una manera rápida y fácil."
        />
        <meta name="twitter:image" content="LINK TO IMAGE" />
        <meta name="twitter:site" content="@cef" />
        <meta name="twitter:creator" content="@ealanisln" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/apple-icon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
