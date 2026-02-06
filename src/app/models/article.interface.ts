import { Author } from "./author.interface";
import { CategoryEnum } from "./category.enum";

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: CategoryEnum;
  author: Author;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}