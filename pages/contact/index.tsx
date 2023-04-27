import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact, { FormProps } from "@/components/Contact";

const ContactPage = () => {
  const formProps: FormProps = {
    result: false,
    isChecked: false,
    callTime: [],
    loading: false
  };

  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us - we'd love to hear from you!."
      />

      <Contact {...formProps} />
    </>
  );
};

export default ContactPage;
