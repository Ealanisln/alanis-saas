"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the useRouter hook
import Axios from "axios";
import { GetStaticPropsContext } from "next";

interface SessionData {
  metadata: {
    orderId: string;
    // Add other properties as needed
  };
  customer: {
    name: string;
    // Add other customer properties as needed
  };
  // Add other session data properties as needed
}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const Success = () => {
  const [customerName, setCustomerName] = useState("");
  const [isSessionFetching, setSessionFetching] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null); // Use null as initial state
  const router = useRouter(); // Use the useRouter hook to access query parameters
  const { session_id } = router.query; // Destructure the session_id from the query object

  useEffect(() => {
    setSessionFetching(true);
    if (session_id) {
      Axios.get(`/api/get-session/?session_id=${session_id}`)
        .then((response) => {
          // Check if customer_details exist in the response
          if (
            response.data.customer_details &&
            response.data.customer_details.name
          ) {
            const customerName = response.data.customer_details.name;
            setCustomerName(customerName);
          } else {
            console.log("Customer details not found in the response");
          }

          setSessionData(response?.data ?? {});
          setSessionFetching(false);
        })
        .catch((error) => {
          console.log(error);
          setSessionFetching(false);
        });
    }
  }, [session_id]);

  if (isSessionFetching || sessionData === null) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 py-8">
              <SectionTitle
                title="Purchase was confirmed."
                paragraph={`Hi, ${customerName}. Thank you for your recent purchase. We are honored to gain you as a customer and hope to serve you for a long time. These are the next steps:`}
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="We will contact you." />
                    <List text="We provide an estimated time to deliver your design." />
                    <List text="We upload it to the hosting to make it live." />
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Server Side Rendering" />
                    <List text="Static site generation" />
                    <List text="User friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;

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
