import { BookCartType } from "src/components/BookCard/types";

export type AllBooksResponse = {
  total: string;
  books: BookCartType[];
};
export type SearchBooksResponse = {
  total: string;
  page: string;
  books: BookCartType[];
};
export type SearchPaginationResponse = {
  query: string;
  page: number;
};
export type SingleBooksResponse = {
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
