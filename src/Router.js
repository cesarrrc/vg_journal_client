import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Post from "./pages/post/Post";
import CreatePost from "./pages/create-post/CreatePost";
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import UserReroute from "./components/navigation/UserReroute";
import RootLayout from "./layouts/RootLayout";
import EditPost from "./pages/edit-post/EditPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <ScrollRestoration /> */}
      <Route index element={<Home />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute component={Dashboard} />}
      />
      <Route path="/login" element={<UserReroute component={Login} />} />
      <Route path="/signup" element={<UserReroute component={Signup} />} />
      <Route path="/post/:post_id" element={<Post />} />
      <Route
        path="/create-post"
        element={<ProtectedRoute component={CreatePost} />}
      />
      <Route
        path="/edit-post/:post_id"
        element={<ProtectedRoute component={EditPost} />}
      />
    </Route>
  )
);

export default router;
