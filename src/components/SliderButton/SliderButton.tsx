import React from "react";
import { useSwiper } from "swiper/react";

import "swiper/css";
import styles from './SliderButton.module.scss';
import { NextSliderArrowIcon, PrevSliderArrowIcon } from "src/assets/icon";



const SliderButton = () => {
  const swiper= useSwiper()

  const onPrevClick = () => swiper.slidePrev();
  const onNextClick = () => swiper.slideNext();


  return (
          <div className={styles.button}>
            <div onClick={onPrevClick}>
              <PrevSliderArrowIcon />
            </div>
            <div onClick={onNextClick}>
              <NextSliderArrowIcon />
            </div>
          </div>
       );
};

export default SliderButton;
