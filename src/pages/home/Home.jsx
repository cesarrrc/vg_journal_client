import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import { getAllPosts } from "../../utils/api/posts";
import classes from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
// import Quill from "../../components/quill/Quill";

const Home = () => {
  const dispatch = useDispatch();
  // const [landed, setLanded] = useState(false);
  const posts = useSelector((state) => state.posts);
  const [landed, setLanded] = useOutletContext();
  useEffect(() => {
    console.log("effect ran 1", landed);
    if (!landed) {
      console.log("effect ran 2");
      getAllPosts(dispatch, setPosts);
      setLanded(true);
    }
  }, [dispatch, posts, landed, setLanded]);

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
