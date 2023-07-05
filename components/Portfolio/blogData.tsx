import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Conducir es fácil (Drive it's easy)",
    paragraph:
      "This website was a upgrade from HTML/CSS to Next JS, including login, database and permissions usage.",
    image: "/images/blog/blog-01.jpg",
    location: {
      url: "https://conducir-es-facil.vercel.app/",
      image: "/images/blog/yo.jpg",
      designation: "NextJS, Prisma, Supabase, Tailwind CSS.",
    },
    tags: ["Static Website"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Note Taker Web App - Using react hooks. ",
    paragraph:
      "This web app was created from the original version JavaScript To-Do app, but this includes login and react hooks usage.",
    image: "/images/blog/blog-02.jpg",
    location: {
      url: "https://note-taker-wheat.vercel.app/",
      image: "/images/blog/yo.jpg",
      designation: "NextJS, supabase, prisma.",
    },
    tags: ["Web app"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Sierra Western Store",
    paragraph:
      "This e-commerce was developed using Nextjs and postgreSQL, chakra UI and next auth for login.",
    image: "/images/blog/blog-03.jpg",
    location: {
      url: "https://sierrra-western-store-git-navbar-ealanisln.vercel.app/",
      image: "/images/blog/yo.jpg",
      designation: "NextJS, Tailwind, Supabase",
    },
    tags: ["E-commerce"],
    publishDate: "2023",
  },
];
export default blogData;
