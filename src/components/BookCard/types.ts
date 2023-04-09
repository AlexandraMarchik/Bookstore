export type BookCardType = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export enum CardNumbers {
  First,
  Second,
  Third,
  Fourth,
  Fifth,

}
export type CardProps = {
  card: BookCardType;
  number?: CardNumbers;
  className?: string;
};
