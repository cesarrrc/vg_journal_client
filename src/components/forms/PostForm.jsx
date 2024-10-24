import React from "react";

const CreatePost = ({ classes, handleSubmit, handleChange, body }) => {
  return (
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
          onChange={handleChange}
          value={body.description}
          required
        />
      </div>

      <button type="submit" className={classes.submit}>
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
