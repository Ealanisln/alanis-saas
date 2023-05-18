import { GetStaticPropsResult } from 'next';

import PricingStripe from '@/components/PricingStripe';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { Product } from 'types';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return <PricingStripe products={products} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
