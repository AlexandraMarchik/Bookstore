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



export enum RoutesList {
  Home = "/",
  SingleBook = "/books/:isbn13",
  Favorites ='/favorites',
  SignIn = "/sign-in",
  Search = "/search/:query",
  Cart = '/cart',
  // SignUp = "/sign-up",
  // Confirm = "activate/:uid/:token",
  // Success = "/sign-up/success",
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
          <Route path={RoutesList.SignIn} element={<RegistrationPage />} />
          <Route path={RoutesList.Favorites} element={<Favorites />} />
          <Route path={RoutesList.Cart} element={<Cart />} />
          <Route path={RoutesList.Search} element={<Search />} />
          <Route path={RoutesList.Default} element={<div>404 NOT FOUND</div>} />
          {/*<Route path={RoutesList.Success} element={<Success />} />*/}
          {/*<Route path={RoutesList.SignUp} element={<SignUp />} />*/}
          {/*<Route path={RoutesList.Confirm} element={<Confirm />} />*/}
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
