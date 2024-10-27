import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import { getAllPosts } from "../../utils/api/posts";
import classes from "./Home.module.css";
// import Quill from "../../components/quill/Quill";

const Home = () => {
  const dispatch = useDispatch();
  const [landed, setLanded] = useState(false);
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    setLanded(true);
    if (posts.allPosts.length === 0 || !landed) {
      getAllPosts(dispatch, setPosts);
    }
  }, [dispatch, posts, landed]);

  return (
    <div className={classes.main_container}>
      <h1>Welcome to VG Journal</h1>
      {/* <Quill /> */}
      {posts.allPosts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.allPosts.map((post) => <PostCard post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Home;
