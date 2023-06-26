import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Conducir es fácil (Drive it's easy)",
    paragraph:
      "This website was a upgrade from HTML/CSS to Next JS, including login, database and permissions usage.",
    image: "/images/blog/blog-01.jpg",
    location: {
      url: "www.conduciresfacil.cl",
      image: "/images/blog/author-01.png",
      designation: "Web Developer",
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
      url: "React",
      image: "/images/blog/author-02.png",
      designation: "https://note-taker-wheat.vercel.app/",
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
      url: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "https://sierrra-western-store.vercel.app",
    },
    tags: ["E-commerce"],
    publishDate: "2025",
  },
];
export default blogData;
