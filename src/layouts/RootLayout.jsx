import React, { useState } from "react";
import NavBar from "../components/nav-bar/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = ({ children }) => {
  const [landed, setLanded] = useState(false);
  return (
    <>
      <ScrollRestoration />

      <NavBar />
      <main>
        <Outlet context={[landed, setLanded]} />
      </main>
    </>
  );
};

export default RootLayout;
