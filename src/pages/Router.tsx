import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "src/pages/Home";
import PagesContainer from "src/pages/PagesContainer";
import Auth from "src/pages/FormContainer/Auth";
import BookDetails from "src/pages/BookDetails";
import Favorites from "src/pages/Favourites";
import Search from "src/pages/Search";
import Cart from "src/pages/Cart";
import NotFound from "src/pages/NotFound";
import Account from "src/pages/FormContainer/Account";
import ResetPassword from "src/pages/FormContainer/ResetPassword";
import NewPassword from "src/pages/FormContainer/NewPassword";


export enum RoutesList {
  Home = "/",
  SingleBook = "/books/:isbn13",
  Favorites ='/favorites',
  Auth = "/auth",
  Search = "/search/:query/:page",
  Cart = "/cart",
  Account = "/user",
  Reset = "/auth/reset",
  NewPassword = "/auth/new-password",
  Default = "*",
}

const Router = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route
            path={RoutesList.SingleBook}
            element={<BookDetails/>}
          />
          <Route path={RoutesList.Auth} element={<Auth />} />
          <Route path={RoutesList.Favorites} element={<Favorites />} />
          <Route path={RoutesList.Cart} element={<Cart />} />
          <Route path={RoutesList.Search} element={<Search />} />
          <Route path={RoutesList.Default} element={<NotFound/>} />
          <Route path={RoutesList.Account} element={<Account/>} />
          <Route path={RoutesList.Reset} element={<ResetPassword/>} />
          <Route path={RoutesList.NewPassword} element={<NewPassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
