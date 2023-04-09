import React from "react";
import { useSelector } from "react-redux";

import { BooksSelectors } from "src/redux/reducer/booksSlice";
import FormContainer from "src/pages/FormContainer";
import FavoritesCardList from "src/components/FavoritesCardList";

const Favorites = () => {
    const favoritesList = useSelector(BooksSelectors.getFavoritesBooks);

    return (
        <div>
            <FormContainer title={'Favorites'}/>
            <FavoritesCardList booksList={favoritesList}/>
        </div>
    );
};

export default Favorites;
