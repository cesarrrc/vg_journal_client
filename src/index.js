import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="cesarrr.us.auth0.com"
    clientId="1GssKyZYnGoeQD44vzgDPjgRXG1lvmXQ"
    authorizationParams={{
      redirect_uri: window.location.origin + "/dashboard",
    }}
  >
    <App />
  </Auth0Provider>
);
