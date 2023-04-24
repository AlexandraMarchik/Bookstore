import { BookCardType } from "src/components/BookCard/types";

export type SetSearchBooksPayload = {
  booksList: BookCardType[];
  booksCount: string;
};
export type SetUserPayload = {
  email: string | null;
  token: string | null;
  id: string | null;
};
