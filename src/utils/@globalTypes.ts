import {KeyboardEvent} from "react";

export enum TabsNames {
    Description,
    Authors,
    Reviews,
    SignIn,
    SignUp,
}
export type BookCartType = {
    error: string;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: string;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf?: { [key: string]: string };
    quantity: number;
};
export type InputProps = {
    value: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    title?: string;
    placeholder?: string;
    disabled?: boolean;
    errorText?: string;
    type: string;
    inputClassName?: string;
    onBlur?: () => void
};
