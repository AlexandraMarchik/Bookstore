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
}
export type CardProps = {
  card: BookCardType;
  form?:BookForm;
  className?: string;
};
