import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Post from "./components/posts/post/Post";
import CreatePost from "./pages/create-post/CreatePost";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post/:post_id" element={<Post />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
};

export default Router;
