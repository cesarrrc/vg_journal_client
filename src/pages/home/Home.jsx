import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/posts/post-card/PostCard";
import { setPosts } from "../../store/features/PostSlice";

import classes from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    if (!posts.length) {
      fetch(process.env.REACT_APP_API_URL + "/posts/get-posts", {
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
  }, [dispatch, posts]);

  return (
    <div className={classes.main_container}>
      <h1>Welcome to VG Journal</h1>
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => <PostCard post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Home;
