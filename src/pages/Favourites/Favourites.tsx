import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CarouselProvider } from "pure-react-carousel";

import styles from "./Favourites.module.scss";
import { BooksSelectors } from "src/redux/reducer/booksSlice";
import FormContainer from "src/pages/FormContainer";
import FavouritesCardList from "src/components/FavouritesCardList";
import BooksSlider from "src/components/BooksSlider";

const Favourites = () => {
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);

  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <FormContainer title={"Favourites"} />
      <div className={styles.favoritesContainer}>
        <FavouritesCardList booksList={favouritesList} />
        <div className={styles.carouselContainer}>
          <CarouselProvider
            visibleSlides={slideCount}
            totalSlides={6}
            step={1}
            currentSlide={currentSlide}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            isIntrinsicHeight={true}
          >
            <BooksSlider
              title={"Popular Books"}
              setSlideCount={setSlideCount}
              setCurrentSlide={setCurrentSlide}
            />
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
