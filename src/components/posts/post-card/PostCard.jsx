import React from "react";
import { formatDistanceToNow } from "date-fns";
import classes from "./PostCard.module.css";
import { Link } from "react-router-dom";
import LinkButton from "../../buttons/LinkButton";

const PostCard = ({ post, full }) => {
  return (
    <div className={classes.main_container} key={post.id}>
      <h2>
        <LinkButton href={"/post/" + post.id} content={post.title} />
      </h2>
      <h3>
        <LinkButton href={"/user/" + post.author} content={post.author} />
      </h3>
      {post.description && full
        ? post.description.split("/b").map((paragraph, i, arr) => (
            <p key={i}>
              <span>{paragraph}</span>
              <br />
            </p>
          ))
        : post.description &&
          post.description
            .split("")
            .slice(0, 1000)
            .join("", " ")
            .split("/b")
            .map((paragraph, i, arr) => (
              <p key={i}>
                <span>
                  {paragraph}
                  {i !== 0 && arr.length - 1 === i && (
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
                <br />
              </p>
            ))}
      {post.description && post.description.length > 1000 && (
        <h5>
          <LinkButton href={"/post/" + post.id} content="Read More" />
        </h5>
      )}
      <h4>{formatDistanceToNow(new Date(post.create_time))} ago</h4>
    </div>
  );
};

export default PostCard;
