export type BookCardType = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export enum BookForm {
  Favourite,
  Cart,
  Search
}
export type CardProps = {
  card: BookCartType;
  form?: BookForm;
  className?: string;
};

export type BookCartType = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: { [key: string]: string };
  quantity: number;
};
