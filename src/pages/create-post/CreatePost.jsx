import React, { useState } from "react";
import classes from "./CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllPostsWithSinglePost,
  updateUserPostsWithSinglePost,
} from "../../store/features/PostSlice";
import { getCookies } from "../../utils/cookie";

const Signup = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cookies = getCookies();
  const user = useSelector((state) => state.user);

  const [body, setBody] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "/posts/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.id_token,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response, "ok packet");
        dispatch(
          updateAllPostsWithSinglePost({
            ...response.data,
            author: user.username,
          })
        );
        dispatch(
          updateUserPostsWithSinglePost({
            ...response.data,
            author: user.username,
          })
        );
        nav("/dashboard");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className={classes.main_container}>
      <form className={classes.contact_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={body.title}
            required
          />
        </div>
        <div className={classes.description}>
          <label htmlFor="description">Description:</label>
          <textarea
            rows={8}
            name="description"
            id="description"
            // required
            onChange={handleChange}
            value={body.description}
            required
          />
        </div>

        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
