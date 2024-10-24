import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Post from "./pages/post/Post";
import CreatePost from "./pages/create-post/CreatePost";
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import UserReroute from "./components/navigation/UserReroute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
    </Routes>
  );
};

export default Router;
