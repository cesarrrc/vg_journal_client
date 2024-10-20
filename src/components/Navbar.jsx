import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <h2 style={{ flex: 2, display: "flex", justifyContent: "center" }}>
        The Video Game Journal
      </h2>
      <div
        style={{
          display: "flex",
          gap: 10,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Link to="/">home</Link>
        <Link to="/dashboard">dash</Link>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navbar;
