import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAllPostsWithSinglePost } from "../../store/features/PostSlice";
import PostCard from "../../components/post-card/PostCard";
import { getSinglePost } from "../../utils/api/posts";
import classes from "./Post.module.css";

const Post = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const post = posts.allPosts.find((post) => post.id === Number(post_id));

  useEffect(() => {
    if (!post) {
      getSinglePost(post_id, dispatch, updateAllPostsWithSinglePost);
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
