import {BookCardType} from "src/components/BookCard/types";



export type AllBooksResponse = {
  total: string;
  books: BookCardType[];
};
export type SingleBooksResponse = {
  error: string,
  title: string,
  subtitle: string,
  authors: string,
  publisher: string,
  isbn10:string,
  isbn13: string,
  pages: string,
  year: string,
  rating: string,
  desc: string,
  price: string,
  image: string,
  url: string,
  pdf: {
  "Chapter 2": string,
  "Chapter 5": string,
}
};