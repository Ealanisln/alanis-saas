import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { GetStaticPropsContext } from "next";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About me"
        description="👋 Hi there! I'm a 🇲🇽 Mexican web developer who is currently living in 🌁 California. I have a passion for creating impactful experiences on the web 🌎, and I'm constantly learning something new. Additionally, I enjoy helping others to grow and develop alongside me. 👨🏽‍💻"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

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
