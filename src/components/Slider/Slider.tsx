import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import styles from "./Slider.module.scss";
import { BooksSelectors, getAllBooks } from "src/redux/reducer/booksSlice";
import BookCard from "src/components/BookCard";
import SliderButton from "src/components/SliderButton";

type BooksSliderProps = {
  title: string;
};

const Slider: FC<BooksSliderProps> = ({ title }) => {
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ query: "(max-width: 821px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });
  const booksList = useSelector(BooksSelectors.getAllBooks);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={32}
        slidesPerView={isMobile ? 1: isTablet ? 2 : 3}
        className={styles.swiper}
      >
        <div className={styles.titleContainer}>
          <div className={styles.title}>{title}</div>
          <SliderButton />
        </div>
        <div className={styles.sliderContainer}>
          {booksList.map((slide) => {
            return (
              <SwiperSlide key={slide.isbn13}>
                <BookCard card={slide} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
