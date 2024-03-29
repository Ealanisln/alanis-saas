"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Location = {
  url: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  location: Location;
  tags: string[];
  publishDate: string;
};

const SingleBlog = () => {
  const t = useTranslations("BlogData");

  const blogData: Blog[] = [
    {
      id: 6,
      title: t("charlapdf"),
      paragraph: t("charladescription"),
      image: "/images/blog/blog-06.webp",
      location: {
        url: "https://www.charlapdf.pro",
        image: "/images/blog/yo.jpg",
        designation: "NextJS, OpenAI, postgreSQL",
      },
      tags: ["AI API"],
      publishDate: "2023",
    },
    {
      id: 5,
      title: t("catwiki"),
      paragraph: t("catdescription"),
      image: "/images/blog/blog-05.webp",
      location: {
        url: "https://cat-wiki-alanis.vercel.app/",
        image: "/images/blog/yo.jpg",
        designation: "NextJS, API, Tailwind CSS.",
      },
      tags: ["Static Site Generation"],
      publishDate: "2023",
    },
    {
      id: 4,
      title: t("cef"),
      paragraph: t("descriptioncef"),
      image: "/images/blog/blog-01.webp",
      location: {
        url: "https://conducir-es-facil.vercel.app/",
        image: "/images/blog/yo.jpg",
        designation: "NextJS, Prisma, Supabase, Tailwind CSS.",
      },
      tags: ["Static Website"],
      publishDate: "2023",
    },
    {
      id: 3,
      title: t("saas"),
      paragraph: t("descriptionSaas"),
      image: "/images/blog/blog-04.webp",
      location: {
        url: "https://www.alanis.dev/",
        image: "/images/blog/yo.jpg",
        designation: "NextJS, Tailwind, Clerk",
      },
      tags: ["Landing Page"],
      publishDate: "2023",
    },
    {
      id: 2,
      title: t("sierra"),
      paragraph: t("descriptionSierra"),
      image: "/images/blog/blog-03.webp",
      location: {
        url: "https://sierra-western.vercel.app/",
        image: "/images/blog/yo.jpg",
        designation: "NextJS, Next-auth, Prisma, Paypal",
      },
      tags: ["E-commerce"],
      publishDate: "2023",
    },
    {
      id: 1,
      title: t("familyvet"),
      paragraph: t("descriptionvet"),
      image: "/images/blog/blog-02.webp",
      location: {
        url: "https://www.vetforfamily.com",
        image: "/images/blog/yo.jpg",
        designation: "NextJS",
      },
      tags: ["Static website"],
      publishDate: "2023",
    },
  ];

  return (
    <>
      {blogData.map((blogItem) => (
        <div key={blogItem.id} className="mb-8">
          <div
            className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
            data-wow-delay=".1s"
          >
            <Link
              href={blogItem.location.url}
              className="relative block h-[220px] w-full"
              target="_blank"
            >
              <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
                {blogItem.tags[0]}
              </span>
              <Image
                src={blogItem.image}
                alt="image"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </Link>
            <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
              <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                <Link href={blogItem.location.url} target="_blank">
                  {blogItem.title}
                </Link>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                {blogItem.paragraph}
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                  <div className="mr-4">
                    <div className="position:relative relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={blogItem.location.image} alt="author" fill />
                    </div>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      URL:{" "}
                      <span className="font-light">
                        <Link href={blogItem.location.url}>
                          {blogItem.location.url}
                        </Link>
                      </span>
                    </h4>
                    <p className="text-xs text-body-color">
                      {blogItem.location.designation}
                    </p>
                  </div>
                </div>
                <div className="inline-block">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    {t("date")}
                  </h4>
                  <p className="text-xs text-body-color">
                    {blogItem.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleBlog;
