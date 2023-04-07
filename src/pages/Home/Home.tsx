import React, {useEffect, useMemo, useState} from "react";

import Title from "../../components/Title";
import BookCardsList from "../../components/BookCardsList";
import styles from './Home.module.scss'
import Tabs from "src/components/Tabs";
import {TabsNames} from "src/utils/@globalTypes";
import {useDispatch, useSelector} from "react-redux";
import {BooksSelectors, getAllBooks} from "src/redux/reducer/booksSlice";
import Subscribe from "src/components/Subscribe";


const TABS_LIST = [
      {
        title: "Description",
        disabled: false,
        key: TabsNames.Description,
      },
      {
        title: "Reviews",
        disabled: false,
        key: TabsNames.Reviews,
      },
      {
        title: "Authors",
        disabled: false,
        key: TabsNames.Authors,
      },
    ]

const Home = () => {
  const dispatch= useDispatch()

  const [activeTab, setActiveTab] = useState(TabsNames.Description);
  const booksList = useSelector(BooksSelectors.getAllBooks)

  // const onTabClick = (key: TabsNames) => {
  //   setActiveTab(key);
  // };
  useEffect(() => {
  dispatch(getAllBooks());
}, []);

  return (
    <div className={styles.container}>
      <Title title={"New Releases Books"} />
      {/*<Tabs activeTab={activeTab} tabList={TABS_LIST} onClick={onTabClick}/>*/}
      <BookCardsList cardsList={booksList} />
        <Subscribe/>
    </div>
  );
};
export default Home;
