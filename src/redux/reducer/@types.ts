import {BookCartType} from "src/utils/@globalTypes";


export type SetSearchBooksPayload = {
  booksList: BookCartType[];
  booksCount: string;
};
export type SetUserPayload = {
  name: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
};
