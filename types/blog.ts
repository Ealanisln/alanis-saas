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
