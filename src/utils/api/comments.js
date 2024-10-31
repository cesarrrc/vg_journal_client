import { getCookies } from "../cookie";

export const allCommentsForAPost = async (post) => {
  const results = await fetch(
    process.env.REACT_APP_API_URL + "/post-comment/post-comments/" + post.id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
      //   console.log(results, "api call");
      return results;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  return results;
};

export const addCommentToAPost = async (post_id, comment) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/post-comment/add-post-comment/" +
        post_id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookies().id_token,
        },
        body: JSON.stringify({ comment }),
      }
    );
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommentFromAPost = async (user_comment_id) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "/post-comment/remove-post-comment/" +
        user_comment_id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookies().id_token,
        },
      }
    );
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
