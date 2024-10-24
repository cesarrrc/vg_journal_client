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
      console.log(response, "ok packet");
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

export const fetchUserWithClientToken = (
    cookies,
    dispatch,
    newCookie,
    setUser
  ) => {
    fetch(process.env.REACT_APP_API_URL + "/users/get-profile", {
      headers: {
        "Content-Type": "application/json", // Adjust content type as needed
        Authorization: "Bearer " + cookies.client_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        newCookie("id_token", data.token);
        dispatch(setUser(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  export const fetchUserDetailsWithIdToken = (cookies, dispatch, setUser) => {
    fetch(process.env.REACT_APP_API_URL + "/users/revalidate-user", {
      headers: {
        "Content-Type": "application/json", // Adjust content type as needed
        Authorization: "Bearer " + cookies.id_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('setttoingggggg')
        dispatch(setUser(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
