import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllPostsWithSinglePost,
  updateUserPostsWithSinglePost,
} from "../../store/features/PostSlice";
import PostForm from "../../components/forms/PostForm";
import { getCookies } from "../../utils/cookie";
import { createPost, editPost, getSinglePost } from "../../utils/api/posts";
import { change } from "../../utils/handlers";
import classes from "./EditPost.module.css";

const EditPost = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts.allPosts);
  const cookies = getCookies();
  const post_id = useParams().post_id;
  const [body, setBody] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const foundPost = posts.find((post) => post.id == post_id);
    console.log(foundPost, "foundpost");
    if (!foundPost) {
      getSinglePost(post_id, dispatch, updateAllPostsWithSinglePost);

      return;
    }
    console.log("setting bodyyyyyyy");
    setBody({
      title: foundPost.title,
      description: foundPost.description,
    });
  }, [dispatch, posts, post_id]);

  const handleChange = (e) => {
    change(e, body, setBody);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await editPost(post_id, body);
    console.log("handle edit change", results);
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

export default EditPost;
