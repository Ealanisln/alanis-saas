import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us - we'd love to hear from you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
