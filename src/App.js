import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  console.log(useAuth0());
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
