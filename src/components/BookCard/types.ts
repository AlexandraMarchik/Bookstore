import { BookCartType } from "src/utils/@globalTypes";

export enum BookForm {
  Favourite,
  Cart,
  Search,
}

export type CardProps = {
  card: BookCartType;
  form?: BookForm;
  className?: string;
};
