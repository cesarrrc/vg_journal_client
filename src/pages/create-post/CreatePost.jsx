import React, { useState } from "react";
import classes from "./CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllPostsWithSinglePost,
  updateUserPostsWithSinglePost,
} from "../../store/features/PostSlice";
import { getCookies } from "../../utils/cookie";
import { createPost } from "../../utils/api/auth";
import { change } from "../../utils/handlers";
import PostForm from "../../components/forms/PostForm";

const CreatePost = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cookies = getCookies();

  const [body, setBody] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    change(e, body, setBody);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(cookies, body, dispatch, user, [
      updateAllPostsWithSinglePost,
      updateUserPostsWithSinglePost,
    ]);
    nav("/dashboard");
  };

  return (
    <div className={classes.main_container}>
      <PostForm
        classes={classes}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        body={body}
      />
    </div>
  );
};

export default CreatePost;
