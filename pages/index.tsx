import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/PricingPlans";
import { GetStaticPropsContext } from "next";
// import PackagesComponent from "@/components/Pricing/Packages";
// import Testimonials from "@/components/Testimonials";

export default function Home() {

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <PackagesComponent /> */}
      <PricingPlans />
      {/* <Blog /> */}
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`./locales/${locale}.json`)).default,
    },
  };
}


