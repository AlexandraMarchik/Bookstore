import { BookCardType } from "src/components/BookCard/types";

export type SetSearchBooksPayload = {
  booksList: BookCardType[];
  booksCount: string;
};

