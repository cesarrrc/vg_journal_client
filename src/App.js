import { useEffect } from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/features/UserSlice";
import {
  fetchUserDetailsWithIdToken,
  fetchUserWithClientToken,
} from "./utils/api/auth";
import { newCookie } from "./utils/cookie";

import NavBar from "./components/nav-bar/NavBar";
import Router from "./Router";
import cookie from "cookie";

import "./App.css";
import router from "./Router";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.client_token && !cookies.id_token) {
      return fetchUserWithClientToken(cookies, dispatch, newCookie, setUser);
    }
    if (cookies.id_token && !user) {
      console.log(user);
      return fetchUserDetailsWithIdToken(cookies, dispatch, setUser);
    }
  }, [user, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
