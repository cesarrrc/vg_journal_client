export const getAllPosts = (dispatch, setPosts) => {
  fetch(process.env.REACT_APP_API_URL + "/posts/get-posts", {
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
      dispatch(setPosts(results.data));
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
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
      console.log(results);
      dispatch(updateAllPostsWithSinglePost(results.data));
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const getUserPosts = (
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
