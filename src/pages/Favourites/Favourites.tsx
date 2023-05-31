import React from "react";
import { useSelector } from "react-redux";


import styles from "./Favourites.module.scss";
import { BooksSelectors } from "src/redux/reducer/booksSlice";
import FormContainer from "src/pages/FormContainer";
import FavouritesCardList from "src/components/FavouritesCardList";
import Slider from "src/components/Slider";

const Favourites = () => {
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);

  return (
    <div>
      <FormContainer title={"Favourites"} />
      <div className={styles.favoritesContainer}>
        <FavouritesCardList booksList={favouritesList} />
          <div className={styles.carouselContainer}>
              <Slider title={"Popular Books"} />
          </div>
      </div>
    </div>
  );
};

export default Favourites;
