import React from "react";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Welcome to VG Journal</h1>
      {!isAuthenticated && <LoginButton />}
    </div>
  );
};

export default Home;
