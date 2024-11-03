import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import Heart from "react-heart";
import {
  updatePostWithLike,
  updatePostWithoutLike,
} from "../../store/features/PostSlice";
import LinkButton from "../buttons/LinkButton";
import AddComment from "../forms/add-comment/AddComment";

import { FaCommentAlt } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
// import { IoBookmarkOutline } from "react-icons/io5";
import classes from "./PostCard.module.css";
import { addPostLike, removePostLike } from "../../utils/api/likes";
import {
  addCommentToAPost,
  allCommentsForAPost,
  deleteCommentFromAPost,
} from "../../utils/api/comments";

const PostCard = ({ post, full = false }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [active, setActive] = useState(false);
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (post.all_likes && user) {
      const found_user = post.all_likes.find((id) => {
        return Number(id) === Number(user.id);
      });
      if (found_user) {
        setActive(true);
      }
    }
  }, [user, post]);

  useEffect(() => {
    if (!post) {
      return;
    } else {
      if (post && !comments) {
        const fetchAllComments = async () => {
          const results = await allCommentsForAPost(post);
          setComments(results);
          return results;
        };
        fetchAllComments();
        return;
      }
    }
  }, [post, comments]);

  const handleLike = async () => {
    if (active) {
      const results = await removePostLike(post);
      console.log(results, "from handle like");
      dispatch(updatePostWithoutLike({ user_id: user.id, post_id: post.id }));
      setActive(false);
      return;
    } else {
      const results = await addPostLike(post);
      console.log(results, "from remove like");
      dispatch(updatePostWithLike({ user_id: user.id, post_id: post.id }));
      setActive(true);
    }
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await addCommentToAPost(post.id, comment);
    console.log(results, "results");
    setComments([...comments, results.data]);
    setComment("");
  };

  const handleDelete = async (user_comment_id) => {
    const results = await deleteCommentFromAPost(user_comment_id, comment);
    console.log(results);
    setComments(
      comments.filter(
        (comment) => Number(comment.user_comment_id) !== Number(user_comment_id)
      )
    );
  };

  return (
    <div className={classes.main_container} key={post.id}>
      <h2>
        <LinkButton href={"/post/" + post.id} content={post.title} />
      </h2>
      <h3>
        <LinkButton href={"/user/" + post.author} content={post.author} />
      </h3>

      {post.description && full
        ? post.description.split("\n").map((paragraph, i, arr) => (
            <p key={i + "-2"}>
              <span>{paragraph}</span>
            </p>
          ))
        : post.description &&
          post.description
            .split("")
            .slice(0, 1000)
            .join("", " ")
            .split("\n")
            .map((paragraph, i, arr) => (
              <p key={i + "-1"}>
                <span>
                  {paragraph}
                  {post.description.length >= 1000 && arr.length - 1 === i && (
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: 12,
                      }}
                      to={"/post/" + post.id}
                    >
                      . . . (continue reading)
                    </Link>
                  )}
                </span>
              </p>
            ))}

      {post.description && post.description.length >= 1000 && !full && (
        <h5>
          <LinkButton href={"/post/" + post.id} content="Read More" />
        </h5>
      )}

      <h4>{formatDistanceToNow(new Date(post.create_time))} ago</h4>

      <div className={classes.icons_container}>
        <div className={classes.left_icons_container}>
          <div className={classes.icon_container}>
            <Heart
              isActive={active}
              onClick={handleLike}
              className={classes.icon}
            />
            <div className={classes.counter}>{post.total_likes}</div>
          </div>
          <div className={classes.icon_container}>
            <LinkButton href={`/post/${post.id}`}>
              <FaCommentAlt className={classes.icon} />
            </LinkButton>
            <div className={classes.counter}>
              {comments?.length ? comments.length : 0}
            </div>
          </div>
        </div>
        <div className={classes.icon_container}>
          <IoBookmark className={classes.icon} />
        </div>
      </div>
      {/* <div className={classes.icon_container}>
          <IoBookmarkOutline className={classes.icon} />
          </div> */}

      {comments &&
        full &&
        comments.map((comment) => (
          <div
            className={classes.comment_container}
            key={comment.post_comment_id + "-4"}
          >
            <h5>{comment.username}</h5>
            <p>{comment.comment}</p>
            <div className={classes.delete_button}>
              {console.log("hello world")}
              {console.log(comment, "hello")}
              {console.log(comment.create_time, "hello")}
              <span>
                {formatDistanceToNow(new Date(comment.create_time))} ago
              </span>
              {user && Number(comment.user_id) === Number(user.id) && (
                <button onClick={() => handleDelete(comment.user_comment_id)}>
                  delete
                </button>
              )}
            </div>
          </div>
        ))}
      {comments &&
        !full &&
        comments.slice(0, 3).map((comment, i) => (
          <div key={i + "-3"} className={classes.comment_container}>
            <h5>{comment.username}</h5>
            <p>{comment.comment}</p>
            <div className={classes.delete_button}>
              {console.log(comment, "hello")}
              {console.log(comment.create_time, "hello")}
              <span>
                {formatDistanceToNow(new Date(comment.create_time))} ago
              </span>
              {user && Number(comment.user_id) === Number(user.id) && (
                <button onClick={() => handleDelete(comment.user_comment_id)}>
                  delete
                </button>
              )}
            </div>
          </div>
        ))}
      {comments && comments.length > 3 && !full && (
        <LinkButton href={"/post/" + post.id} content="View All Comments" />
      )}
      {full && (
        <AddComment
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={comment}
        />
      )}
    </div>
  );
};

export default PostCard;
