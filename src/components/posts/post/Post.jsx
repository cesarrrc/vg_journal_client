import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../post-card/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../store/features/PostSlice";
import classes from "./Post.module.css";

const Post = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === Number(post_id));

  console.log(post, "inside post******");

  useEffect(() => {
    if (!post) {
      console.log("no post ******************* no post*************");
      fetch(process.env.REACT_APP_API_URL + "/posts/get-post/" + post_id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((results) => {
          dispatch(setPosts(results.data));
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [post, dispatch, post_id]);

  return !post ? (
    "loading..."
  ) : (
    <div className={classes.main_container}>
      <PostCard post={post} full />;
    </div>
  );
};

export default Post;
