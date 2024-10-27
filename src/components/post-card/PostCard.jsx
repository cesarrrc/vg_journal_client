import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import Heart from "react-heart";
import { FaCommentAlt } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
// import { IoBookmarkOutline } from "react-icons/io5";

import classes from "./PostCard.module.css";
import LinkButton from "../buttons/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../utils/cookie";
import {
  updatePostWithLike,
  updatePostWithoutLike,
} from "../../store/features/PostSlice";

const PostCard = ({ post, full }) => {
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && !post) return;
    if (!user) return;
    if (!post) return;
    console.log(post);
    const found_user = post.all_likes.find((id) => {
      console.log(post.id, id, user.id);
      return Number(id) === Number(user.id);
    });
    if (found_user) {
      setActive(true);
    }
    console.log(found_user);
  }, [active, user, post]);

  const handleLike = () => {
    if (active) {
      fetch(
        process.env.REACT_APP_API_URL + "/likes/remove-post-like/" + post.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookies().id_token,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((results) => {
          if (results.data) {
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
      dispatch(updatePostWithoutLike({ user_id: user.id, post_id: post.id }));
      setActive(false);
      return;
    }
    fetch(process.env.REACT_APP_API_URL + "/likes/like-post/" + post.id, {
      method: "POST",
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
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    dispatch(updatePostWithLike({ user_id: user.id, post_id: post.id }));
    setActive(true);
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
            <p key={i}>
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
              <p key={i}>
                <span>
                  {paragraph}
                  {post.description.length > 999 && arr.length - 1 === i && (
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
      {post.description && post.description.length > 999 && !full && (
        <h5>
          <LinkButton href={"/post/" + post.id} content="Read More" />
        </h5>
      )}
      <div className={classes.icons_container}>
        <div
          style={{
            display: "flex",
            // height: "16px",
            gap: 20,
          }}
        >
          <div className={classes.icon_container}>
            <Heart
              isActive={active}
              onClick={handleLike}
              className={classes.icon}
            />
            <div className={classes.total_likes}>{post.total_likes}</div>
          </div>
          <div className={classes.icon_container}>
            <LinkButton href={`/post/${post.id}`}>
              <FaCommentAlt className={classes.icon} />
            </LinkButton>
            <div className={classes.total_likes}>{0}</div>
          </div>
        </div>
        <div className={classes.icon_container}>
          <IoBookmark className={classes.icon} />
        </div>
      </div>
      {/* <div className={classes.icon_container}>
          <IoBookmarkOutline className={classes.icon} />
        </div> */}

      <h4>{formatDistanceToNow(new Date(post.create_time))} ago</h4>
    </div>
  );
};

export default PostCard;
