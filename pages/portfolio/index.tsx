import SingleBlog from "@/components/Portfolio/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  const t = useTranslations("Portfolio");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("subtitle")} />
      <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t("latest")}
            paragraph={t("sublatest")}
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            <SingleBlog />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

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
