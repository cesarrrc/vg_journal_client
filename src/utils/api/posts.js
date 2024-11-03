import { getCookies } from "../cookie";

export const getAllPosts = (dispatch, setPosts) => {
  fetch(process.env.REACT_APP_API_URL + "/posts/get-all-posts/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((results) => {
      console.log("SET POSTS ****&&&&&&&&&&******");
      dispatch(setPosts(results.data));
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const getNext10Posts = async (page) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/posts/get-all-posts/" + page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok", response);
    }
    const data = await response.json();
    console.log(data, "this is the 10 more posts ************");
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getSinglePost = (
  post_id,
  dispatch,
  updateAllPostsWithSinglePost
) => {
  fetch(process.env.REACT_APP_API_URL + "/posts/get-post/" + post_id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((results) => {
      console.log(results, "action single post");
      dispatch(updateAllPostsWithSinglePost(results.data));
      return results;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const getUserPosts = async (
  getCookies,
  dispatch,
  setUserPosts,
  setLoading
) => {
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
};

export const createPost = (cookies, body, dispatch, user, callbacks) => {
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
      callbacks.forEach((callback) => {
        dispatch(
          callback({
            ...response.data,
            author: user.username,
          })
        );
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
export const editPost = async (post_id, body) => {
  const cookies = getCookies();
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/posts/edit-post/" + post_id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.id_token,
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok", response);
    }
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }

  // .then((response) => {
  //   return response.json();
  // })
  // .then((response) => {

  //   });
  // })
  // .catch((error) => {
  //   console.error("There was a problem with the fetch operation:", error);
  // });
};
