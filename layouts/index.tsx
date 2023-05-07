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
          content="Are you looking to create a personal or business website, but don't know where to begin? Look no further! We can help you create a unique and affordable website that truly represents you.
          "
        />
        <link rel="canonical" href="https://www.alanis.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your website easy and quick." />
        <meta
          property="og:description"
          content="Are you looking to create a personal or business website, but don't know where to begin? Look no further! We can help you create a unique and affordable website that truly represents you.
          "
        />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta property="og:url" content="https://www.alanis.dev" />
        <meta property="og:site_name" content="Alanis Web Design" />
        <meta name="twitter:title" content="Alanis Web Design" />
        <meta
          name="twitter:description"
          content="Are you looking to create a personal or business website, but don't know where to begin? Look no further! We can help you create a unique and affordable website that truly represents you.
          "
        />
        <meta name="twitter:image" content={
            `${
              process.env.VERCEL_URL ? 'http://' + process.env.VERCEL_URL : ''
            }/site.png`
          } />   
        <meta
          name="og:image"
          content={
            `${
              process.env.VERCEL_URL ? 'http://' + process.env.VERCEL_URL : ''
            }/site.png`
          }
        />
        <meta name="twitter:creator" content="@ealanisln" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
