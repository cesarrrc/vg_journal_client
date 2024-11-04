import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add10Posts, setPosts } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import { getAllPosts, getNext10Posts } from "../../utils/api/posts";
import classes from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
// import Quill from "../../components/quill/Quill";

const Home = () => {
  const dispatch = useDispatch();
  // const [landed, setLanded] = useState(false);
  const posts = useSelector((state) => state.posts);
  const [landed, setLanded] = useOutletContext();
  const [nextPage, setNextPage] = useState(1);
  const [noMorePosts, setNoMorePosts] = useState(false);
  console.log(posts);
  useEffect(() => {
    console.log("effect ran 1", landed);
    if (!landed) {
      console.log("effect ran 2");
      getAllPosts(dispatch, setPosts);
      setLanded(true);
      setNextPage(nextPage + 1);
    }
  }, [dispatch, posts, landed, setLanded]);

  const handleMorePosts = async () => {
    const results = await getNext10Posts(nextPage);
    console.log(results, "these be the results yo");
    if (results.results < 10) {
      setNoMorePosts(true);
    }
    dispatch(add10Posts(results.data));
    setNextPage(nextPage + 1);
  };

  return (
    <div className={classes.main_container}>
      <h1>Welcome to VG Journal</h1>
      {/* <Quill /> */}
      {posts.allPosts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.allPosts.map((post) => <PostCard post={post} key={post.id} />)
      )}
      {!!posts.allPosts.length && !noMorePosts && (
        <button style={{ margin: 20 }} onClick={handleMorePosts}>
          Get More Posts
        </button>
      )}
    </div>
  );
};

export default Home;
