import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Post from "../../components/Blog/Post";
import { useTranslations } from "next-intl";

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  body
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const post = await client.fetch(postQuery, queryParams);

  return {
    props: {
      data: { post },
    },
  };
};

export default function Page({ data }: { data: { post: SanityDocument } })
 {
  const t = useTranslations("Cancel");

  return <Post post={data.post} />;
}
