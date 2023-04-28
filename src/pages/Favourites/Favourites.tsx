import React from "react";
import { useSelector } from "react-redux";

import { BooksSelectors } from "src/redux/reducer/booksSlice";
import FormContainer from "src/pages/FormContainer";
import FavouritesCardList from "src/components/FavouritesCardList";
import BooksSlider from "src/components/BooksSlider";

const Favourites = () => {
    const favouritesList = useSelector(BooksSelectors.getFavoritesBooks);

    return (
        <div>
            <FormContainer title={'Favourites'}/>
            <FavouritesCardList booksList={favouritesList}/>
            <BooksSlider title={"Popular Books"} />
        </div>
    );
};

export default Favourites;
