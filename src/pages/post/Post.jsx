import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/posts/post-card/PostCard";
import { useDispatch, useSelector } from "react-redux";
import {  updateAllPostsWithSinglePost } from "../../store/features/PostSlice";
import classes from "./Post.module.css";

const Post = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts, "inside post******");
  const post = posts.allPosts.find((post) => post.id === Number(post_id));


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
          console.log(results)
          dispatch(updateAllPostsWithSinglePost(results.data));
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
      <PostCard post={post} full />
    </div>
  );
};

export default Post;
