import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserPosts } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import LinkButton from "../../components/buttons/LinkButton";
import { getCookies } from "../../utils/cookie";
import { getUserPosts } from "../../utils/api/posts";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const {
    user,
    posts: { userPosts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserPosts(getCookies, dispatch, setUserPosts, setLoading);
  }, [dispatch]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={classes.main_container}>
      <div className={classes.profile_container}>
        <h2>Welcome {user.username}</h2>
      </div>
      <h3 className={classes.recent_post_text}>Your recent posts:</h3>
      <div className={classes.post_container}>
        {!loading && !userPosts.length ? (
          <div className={classes.no_posts}>
            <h5>
              {loading
                ? "loading..."
                : "You have no posts. Go play a video game and tell us about it."}
            </h5>
            <LinkButton
              href="/create-post"
              content="Create Post"
              className={classes.create_post_btn}
            />
          </div>
        ) : (
          userPosts.map((post) => <PostCard post={post} full key={post.id} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
