import React, { useEffect } from "react";
import classes from "./AddComment.module.css";

const AddComment = ({ handleSubmit, handleChange, value }) => {
  useEffect(() => {
    console.log(value, "indside add comment");
  }, [value]);
  return (
    <div className={classes.main_container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="comment">Add Comment: </label>
        <input
          type="text"
          name="comment"
          id="comment"
          onChange={handleChange}
          value={value}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default AddComment;
