import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/features/UserSlice";
import useCookies from "./hooks/useCookies";
import {
  fetchUserDetailsWithIdToken,
  fetchUserWithClientToken,
} from "./utils/fetchUsers";

import NavBar from "./components/nav-bar/NavBar";
import Router from "./Router";
import cookie from "cookie";

import "./App.css";

function App() {
  const { newCookie } = useCookies();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("app effect", cookies);
    console.log(user, "app");
    const cookies = cookie.parse(document.cookie);
    if (cookies.client_token && !cookies.id_token) {
      fetchUserWithClientToken(cookies, dispatch, newCookie, setUser);
    }
    if (cookies.id_token && !user) {
      fetchUserDetailsWithIdToken(cookies, dispatch, setUser);
    }
  }, [user, dispatch, newCookie]);

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
