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

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const t = useTranslations("BlogData");

  return (
    <>
      <div className="mb-8">
        <div
          className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
          data-wow-delay=".1s"
        >
          <Link href="/" className="relative block h-[220px] w-full">
            <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {t(blog.tags[0])} {/* Access tags from the blog prop */}
            </span>
            <Image src={blog.image} alt="image" fill /> {/* Access image from the blog prop */}
          </Link>
          <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
            <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              <Link href="/">{t("cef")}</Link> {/* Access title from the blog prop */}
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              {blog.paragraph} {/* Access paragraph from the blog prop */}
            </p>
            <div className="flex items-center">
              <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                <div className="mr-4">
                  <div className="position:relative relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={blog.location.image} alt="author" fill /> {/* Access location.image from the blog prop */}
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    URL:{" "}
                    <span className="font-light">
                      <Link href={blog.location.url}>{blog.location.url}</Link> {/* Access location.url from the blog prop */}
                    </span>
                  </h4>
                  <p className="text-xs text-body-color">
                    {blog.location.designation} {/* Access location.designation from the blog prop */}
                  </p>
                </div>
              </div>
              <div className="inline-block">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Date
                </h4>
                <p className="text-xs text-body-color">{blog.publishDate}</p> {/* Access publishDate from the blog prop */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
