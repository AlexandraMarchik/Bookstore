import React, {useEffect, useMemo, useState} from "react";

import Title from "../../components/Title";
import BookCardsList from "../../components/BookCardsList";
import styles from './Home.module.scss'
import Tabs from "src/components/Tabs";
import {TabsNames} from "src/utils/@globalTypes";
import {useDispatch, useSelector} from "react-redux";
import {BooksSelectors, getAllBooks} from "src/redux/reducer/booksSlice";
import Subscribe from "src/components/Subscribe";




const Home = () => {
  const dispatch= useDispatch()


  const booksList = useSelector(BooksSelectors.getAllBooks)


  useEffect(() => {
  dispatch(getAllBooks());
}, []);

  return (
    <div className={styles.container}>
      <Title title={"New Releases Books"} />
      <BookCardsList cardsList={booksList} />
        <Subscribe/>
    </div>
  );
};
export default Home;
