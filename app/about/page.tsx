import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About me"
        description="Hi there! 👋 I'm Ealanisln, a web developer who loves creating impactful experiences on the web. 👨🏽‍💻 I really enjoy creating websites with Next.js and I'm always looking to improve my skills."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
