import React, { createContext, useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styles from "./BooksSlider.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BooksSelectors, getAllBooks } from "src/redux/reducer/booksSlice";
import BookCard from "src/components/BookCard";
import { NextSliderArrowIcon, PrevSliderArrowIcon } from "src/assets/icon";

const BooksSlider = ({title}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const booksList = useSelector(BooksSelectors.getAllBooks);
  const [slideCount, setSlideCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.container}>
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={booksList.length/3}
        step={1}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      >
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
              {booksList.map((item, index) => {
                // if (index > 0 && index < 4) {
                  return <BookCard card={item} key={item.isbn13} />;
                // }
              })}
            </div>
          </Slide>
          {/*<Slide index={1}>*/}
          {/*  <div className={styles.slide}>*/}
          {/*    {booksList.map((item, index) => {*/}
          {/*      if (index > 3 && index < 7) {*/}
          {/*        return <BookCard card={item} key={item.isbn13} />;*/}
          {/*      }*/}
          {/*    })}*/}
          {/*  </div>*/}
          {/*</Slide>*/}
          {/*<Slide index={2}>*/}
          {/*  <div className={styles.slide}>*/}
          {/*    {booksList.map((item, index) => {*/}
          {/*      if (index > 7 && index < 12) {*/}
          {/*        return <BookCard card={item} key={item.isbn13} />;*/}
          {/*      }*/}
          {/*    })}*/}
          {/*  </div>*/}
          {/*</Slide>*/}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default BooksSlider;
