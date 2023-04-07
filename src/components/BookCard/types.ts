export type BookCardType = {
  id: number;
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

}
export type CardProps = {
  card: BookCardType;
  number?: CardNumbers;
};
