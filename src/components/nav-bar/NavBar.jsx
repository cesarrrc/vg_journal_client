import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/features/UserSlice";
import LinkButton from "../buttons/LinkButton";
import { eatAllCookies } from "../../utils/cookie";
import classes from "./NavBar.module.css";
import DrawerComponent from "./drawer/Drawer";

import Hamburger from "hamburger-react";
import useWindowSize from "../../hooks/useWindowSize";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const win = useWindowSize();

  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    eatAllCookies();
    dispatch(logout());
    toggleDrawer(false);
    nav("/");
  };
  console.log(win.width <= 800);
  useEffect(() => {}, [user, win]);

  return (
    <header className={classes.header_container}>
      <div className={classes.main_container}>
        <h1 className={classes.title}>
          <LinkButton href={"/"} content="The VG Journal" />
        </h1>
        {win.width >= 700 ? (
          <nav className={classes.nav}>
            {user ? (
              <>
                <LinkButton content="Dashboard" href="/dashboard" />
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
        ) : (
          <>
            <div className={classes.hamburger_container}>
              <Hamburger
                className={classes.hamburger}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            <DrawerComponent
              className={classes.drawer}
              isOpen={isOpen}
              setOpen={setOpen}
              toggleDrawer={toggleDrawer}
            >
              {user ? (
                <>
                  <LinkButton
                    content="Dashboard"
                    href="/dashboard"
                    handleClick={toggleDrawer}
                  />
                  <LinkButton
                    content="Create Post"
                    href="/create-post"
                    handleClick={toggleDrawer}
                  />
                  <LinkButton content="Logout" handleClick={handleLogout} />
                </>
              ) : (
                <>
                  <LinkButton
                    href="/login"
                    content="Login"
                    handleClick={toggleDrawer}
                  />
                  <LinkButton
                    href="/signup"
                    content="Signup"
                    handleClick={toggleDrawer}
                  />
                </>
              )}
            </DrawerComponent>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
