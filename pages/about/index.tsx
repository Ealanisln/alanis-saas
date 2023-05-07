import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
