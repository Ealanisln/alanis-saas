import PricingPlans from '@/components/PricingPlans'
import React from 'react'
import { GetStaticPropsContext } from "next";

function Plans() {
  return (
    <PricingPlans />
  )
}

export default Plans

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
