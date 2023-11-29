import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import Posts from "../../components/Blog/Posts";
import { client } from "../../sanity/lib/client";

export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(postsQuery);

  return { props: { data } };
};

export default function Home({ data }: { data: SanityDocument[] }) {
  return <Posts posts={data} />
}