import React, { FC, ReactNode, useState } from "react";
import { BookContext } from "src/context/Books/Context";

type BooksProviderProps = {
  children: ReactNode;
};
const BooksProvider: FC<BooksProviderProps> = ({ children }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  return (
    <BookContext.Provider value={{ currentQuantity, setCurrentQuantity }}>
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;
