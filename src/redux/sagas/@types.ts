import {BookCardType} from "src/components/BookCard/types";


export type AllBooksResponse = {
  total: string;
  books: BookCardType[];
};
