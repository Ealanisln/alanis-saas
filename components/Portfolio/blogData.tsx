import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Conducir es fácil (Drive it's easy)",
    paragraph:
      "This website was a upgrade from HTML/CSS to Next JS, including login, database and permissions usage.",
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
    id: 2,
    title: "Alanis Saas",
    paragraph:
      "This website was built using Next.js and Tailwind CSS. Nodemailer was used as the API for the contact form, making it fully responsive. Additionally, a webhook from Stripe will be included to facilitate subscription-based software acquisition.",
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
    id: 3,
    title: "Sierra Western Store",
    paragraph:
      "This e-commerce was developed using Nextjs and postgreSQL, chakra UI and next auth for login.",
    image: "/images/blog/blog-03.webp",
    location: {
      url: "https://sierrra-western-store-git-navbar-ealanisln.vercel.app/",
      image: "/images/blog/yo.jpg",
      designation: "NextJS, Tailwind, Supabase",
    },
    tags: ["E-commerce"],
    publishDate: "2023",
  },
  {
    id: 4,
    title: "Pokedex",
    paragraph:
      "Next.js-based Pokedex, a dynamic web app fetching data from a public API, fully responsive.",
    image: "/images/blog/blog-02.webp",
    location: {
      url: "https://pokedex-alanis.vercel.app/",
      image: "/images/blog/yo.jpg",
      designation: "NextJS",
    },
    tags: ["Web app"],
    publishDate: "2023",
  }
];
export default blogData;
