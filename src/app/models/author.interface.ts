export interface Author {
  name: string;
  role: string;
  image: string;
  socials?: {
    x?: string;
    github?: string;
    linkedin?: string;
  };
}