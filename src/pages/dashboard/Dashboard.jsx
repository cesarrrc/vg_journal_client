import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Dashboard.module.css";
import { getCookies } from "../../utils/cookie";
import { setUserPosts } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import LinkButton from "../../components/buttons/LinkButton";

const Dashboard = () => {
  const {
    user,
    posts: { userPosts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/posts/get-user-posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookies().id_token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((results) => {
        if (results.data) {
          dispatch(setUserPosts(results.data));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
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
