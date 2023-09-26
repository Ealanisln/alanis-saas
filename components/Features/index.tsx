import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("Features");

  return (
    <>
      <section
        key="contact"
        id="features-1"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={t("title")}
            paragraph={t("googleFriendly")}
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div className="w-full" key={feature.category}>
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {t(feature.category)}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {t(feature.paragraph)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
