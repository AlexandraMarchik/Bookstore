import React, {useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "src/pages/Home";
import PagesContainer from "src/pages/PagesContainer";
import RegistrationPage from "src/pages/FormContainer/RegistrationPage";
import BookDetails from "src/pages/BookDetails";
import Favorites from "src/pages/Favourites";
import Search from "src/pages/Search";
import Cart from "src/pages/Cart";
import NotFound from "src/pages/NotFound";
import Account from "src/pages/FormContainer/Account";



export enum RoutesList {
  Home = "/",
  SingleBook = "/books/:isbn13",
  Favorites ='/favorites',
  Auth = "/auth",
  Search = "/search/:query/:page",
  Cart = "/cart",
  Account = "/user",
  Default = "*",
  // ResetPassword = "/sign-in/reset-password",
  // NewPassword = '/new-password'
}
const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route
            path={RoutesList.SingleBook}
            element={<BookDetails/>}
          />
          <Route path={RoutesList.Auth} element={<RegistrationPage />} />
          <Route path={RoutesList.Favorites} element={<Favorites />} />
          <Route path={RoutesList.Cart} element={<Cart />} />
          <Route path={RoutesList.Search} element={<Search />} />
          <Route path={RoutesList.Default} element={<NotFound/>} />
          <Route path={RoutesList.Account} element={<Account/>} />

          {/*<Route path={RoutesList.ResetPassword} element={<ResetPassword />} />*/}
          {/*<Route path={RoutesList.NewPassword} element={<NewPassword />} />*/}
          {/*<Route*/}
          {/*  path={RoutesList.AddPost}*/}
          {/*  element={*/}
          {/*    isLoggedIn ? <AddPost /> : <Navigate to={RoutesList.SignIn} />*/}
          {/*  }*/}
          {/*/>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
