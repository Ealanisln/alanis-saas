import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import PackagesComponent from "@/components/Pricing/Packages";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import { useTranslation, Trans } from "next-i18next";

export default function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <ScrollUp />
      <Hero heading={t("h1")} title={t("title")} />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <PackagesComponent />
      {/* <Pricing /> */}
      {/* <Blog /> */}
    </>
  );
}
