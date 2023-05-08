import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselContext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styles from "./BooksSlider.module.scss";
import { BooksSelectors, getAllBooks } from "src/redux/reducer/booksSlice";
import { NextSliderArrowIcon, PrevSliderArrowIcon } from "src/assets/icon";
import BookCard from "src/components/BookCard";

const BooksSlider = ({ title, setSlideCount, setCurrentSlide }) => {
    const dispatch = useDispatch();

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });
  const booksList = useSelector(BooksSelectors.getAllBooks);
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const { currentSlide, totalSlides, visibleSlides } =
        carouselContext.state;
      setSlideCount(slideToBeVisible);
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (isMobile) {
      updateCarouselSlide(1);
    } else if (isTablet) {
      updateCarouselSlide(2);
    } else {
      updateCarouselSlide(3);
    }
  }, [setSlideCount, setCurrentSlide, carouselContext, isMobile, isTablet]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.text}>{title}</div>
        <div>
          <ButtonBack style={{ background: "none", border: "none" }}>
            <PrevSliderArrowIcon />
          </ButtonBack>
          <ButtonNext style={{ background: "none", border: "none" }}>
            <NextSliderArrowIcon />
          </ButtonNext>
        </div>
      </div>
      <Slider style={{ height: 500 }}>
        <Slide index={0}>
          <div className={styles.slide}>
            {booksList.map((item) => {
              return <BookCard card={item} key={item.isbn13} />;
            })}
          </div>
        </Slide>
      </Slider>
    </div>
  );
};

export default BooksSlider;
