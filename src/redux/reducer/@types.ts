import {BookCardType, BookCartType} from "src/components/BookCard/types";

export type SetSearchBooksPayload = {
  booksList: BookCartType[];
  booksCount: string;
};
export type SetUserPayload = {
  name:string | null;
  email: string | null;
  token: string | null;
  id: string | null;
};
