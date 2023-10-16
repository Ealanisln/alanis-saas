import SectionTitle from "@/components/Common/SectionTitle";
import { GetStaticPropsContext } from "next";
import Link from "next/link";

function Cancel() {
  return (
    <section className="relative z-10 bg-primary/[.03] pt-16 md:pt-20 lg:pt-28">
      <div className="container p-8">
        <SectionTitle
          title="Payment was cancelled. "
          paragraph="You have not been charged!"
          center
        />
        <div className="container p-8 text-center">
          <Link
            href="/"
            className="rounded-md bg-primary py-3 px-8 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cancel;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
