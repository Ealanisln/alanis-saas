import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact, { FormProps } from "@/components/Contact";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const formProps: FormProps = {
    result: false,
    isChecked: false,
    callTime: [],
    loading: false
  };
  const t = useTranslations("Contact");


  return (
    <>
      <Breadcrumb
        pageName={t("title")}
        description={t("subtitle")}
      />

      <Contact {...formProps} />
    </>
  );
};

export default ContactPage;

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

