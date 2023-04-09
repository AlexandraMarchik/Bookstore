import React, {FC} from "react";

import styles from './FavoritesCardList.module.scss'
import EmptyState from "src/components/EmptyState";
import {BookCardType, CardNumbers} from "src/components/BookCard/types";
import BookCard from "src/components/BookCard";


type FavoritesCardListProps = {
    booksList: BookCardType[];
};
const SearchCardList: FC<FavoritesCardListProps> = ({ booksList }) => {
    return booksList.length > 0 ? (
        <div className={styles.container}>

            {booksList.map((item, index) => {
                return <BookCard card={item} number={CardNumbers.Fifth} key={item.isbn13}/>

            })}

        </div>
    ) : (
        <EmptyState
            title="Sorry, there's no favorites books"
            description="Try to add books "
        />
    );
};
export default SearchCardList;