import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/features/UserSlice";
import {
  fetchUserDetailsWithIdToken,
  fetchUserWithClientToken,
} from "./utils/fetchUsers";
import { newCookie } from "./utils/cookie";

import NavBar from "./components/nav-bar/NavBar";
import Router from "./Router";
import cookie from "cookie";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    console.log("effect");
    if (cookies.client_token && !cookies.id_token) {
      console.log("1111111111111111111");
      return fetchUserWithClientToken(cookies, dispatch, newCookie, setUser);
    }
    if (cookies.id_token && !user) {
      console.log("2222222222222222222222222");
      console.log(user);
      return fetchUserDetailsWithIdToken(cookies, dispatch, setUser);
    }
  }, [user, dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
