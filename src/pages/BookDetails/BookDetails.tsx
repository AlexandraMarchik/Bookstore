import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./BookDetails.module.scss";
import {
  FacebookIcon,
  InterfaceIcon,
  InterfaceSecondIcon,
  LikeIcon,
  MoreIcon,
  TwitterIcon,
} from "src/assets/icon";
import Button from "src/components/Button";
import { ButtonType } from "src/components/Button/Button";
import Tabs from "src/components/Tabs";
import { TabsNames } from "src/utils/@globalTypes";
import Subscribe from "src/components/Subscribe";
import {
  BooksSelectors,
  getSingleBook,
  setFavouritesBooks,
} from "src/redux/reducer/booksSlice";
import FormContainer from "src/pages/FormContainer";

const TABS_LIST = [
  {
    title: "Description",
    disabled: false,
    key: TabsNames.Description,
  },
  {
    title: "Authors",
    disabled: false,
    key: TabsNames.Authors,
  },
  {
    title: "Reviews",
    disabled: false,
    key: TabsNames.Reviews,
  },
];

const BookDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isbn13 } = params;


  const singleBook = useSelector(BooksSelectors.getSingleBook);

  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const [showDetails, setShowDetails] = useState(false);
  const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);
  const favoritesIndex = favouritesList.findIndex(
    (books) => books.isbn13 === singleBook?.isbn13
  );
  const onLikeIconClick = () => {
    if (singleBook) {
      dispatch(setFavouritesBooks(singleBook));
    }
  };
  const onTabClick = (key: TabsNames) => {
    setActiveTab(key);
  };
  const onShowMoreDetailsButtonClick = () => {
    return setShowDetails(!showDetails);
  };

  useEffect(() => {
    if (isbn13) {
      dispatch(getSingleBook(isbn13));
    }
  }, []);

  return (
    <div className={styles.container}>
      {singleBook?.title && <FormContainer title={singleBook?.title} />}
      <div className={styles.bookInfoContainer}>
        <div className={styles.bookContainer}>
          <img src={singleBook?.image} className={styles.image}></img>
          <div
            className={classNames(styles.likeIcon, {
              [styles.activeLikeIcon]: favoritesIndex > -1,
            })}
            onClick={onLikeIconClick}
          >
            <LikeIcon />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionInfoContainer}>
            <div className={styles.priceContainer}>
              <div className={styles.price}>{singleBook?.price}</div>
              <div className={styles.rating}>{singleBook?.rating}</div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"Authors"}</div>
              <div className={styles.aboutBookInfo}>{singleBook?.authors} </div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"Publisher"}</div>
              <div className={styles.aboutBookInfo}>
                {singleBook?.publisher}
              </div>
            </div>
            <div className={styles.aboutBookContainer}>
              <div className={styles.aboutBook}>{"Pages"}</div>
              <div className={styles.aboutBookInfo}>{singleBook?.pages} </div>
            </div>
            {showDetails && (
              <div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"isbn13"}</div>
                  <div className={styles.aboutBookInfo}>
                    {singleBook?.isbn13}
                  </div>
                </div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"Year"}</div>
                  <div className={styles.aboutBookInfo}>
                    {singleBook?.year}{" "}
                  </div>
                </div>
                <div className={styles.aboutBookContainer}>
                  <div className={styles.aboutBook}>{"isbn10"}</div>
                  <div className={styles.aboutBookInfo}>
                    {singleBook?.isbn10}
                  </div>
                </div>
              </div>
            )}
            <div className={styles.buttonContainer}>
              <Button
                type={ButtonType.Primary}
                onClick={onShowMoreDetailsButtonClick}
                title={"More detailse"}
                className={styles.button}
              />
              <div className={styles.interfaceIcon}>
                {!showDetails ? <InterfaceIcon /> : <InterfaceSecondIcon />}
              </div>
            </div>
            <Button
              type={ButtonType.Primary}
              title={"add to cart"}
              onClick={() => {}}
              className={styles.secondButton}
            />
            <Button
              type={ButtonType.Primary}
              title={"Preview book"}
              onClick={() => {}}
              className={styles.thirdButton}
            />
          </div>
        </div>
      </div>
      <div>
        <Tabs activeTab={activeTab} tabList={TABS_LIST} onClick={onTabClick} />
        {activeTab === TabsNames.Description && (
          <div className={styles.desc}>{singleBook?.desc}</div>
        )}
        {activeTab === TabsNames.Authors && (
          <div className={styles.desc}>{singleBook?.authors}</div>
        )}
        {activeTab === TabsNames.Reviews && (
          <div className={styles.desc}>{singleBook?.publisher}</div>
        )}
      </div>
      <div className={styles.footer}>
        <div>
          <FacebookIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default BookDetails;