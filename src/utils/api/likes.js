import { getCookies } from "../cookie";

export const addPostLike = async (post) => {
  const results = await fetch(
    process.env.REACT_APP_API_URL + "/likes/like-post/" + post.id,
    {
      method: "POST",
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
      return results;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return error;
    });
  return results;
};

export const removePostLike = async (post) => {
  const results = await fetch(
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
      return results;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return error;
    });
  return results;
};
