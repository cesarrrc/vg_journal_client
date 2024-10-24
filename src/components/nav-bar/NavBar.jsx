import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import LinkButton from "../buttons/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/features/UserSlice";
import { useNavigate } from "react-router-dom";
import { eatAllCookies } from "../../utils/cookie";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("clickkkk");
    eatAllCookies();
    dispatch(logout());
    nav("/");
  };

  useEffect(() => {}, [user]);

  return (
    <header className={classes.main_container}>
      <h1 className={classes.title}>
        <LinkButton href={"/"} content="The VG Journal" />
      </h1>
      <nav className={classes.nav}>
        {user ? (
          <>
            <LinkButton content="Create Post" href="/create-post" />
            <LinkButton content="Logout" handleClick={handleLogout} />
          </>
        ) : (
          <>
            <LinkButton href="/login" content="Login" />
            <LinkButton href="/signup" content="Signup" />
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
