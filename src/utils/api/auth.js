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

export const login = (newCookie, getCookies, dispatch, setUser, body) => {
  fetch(process.env.REACT_APP_API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      newCookie("client_token", data.access_token);
      fetchUserWithClientToken(getCookies(), dispatch, newCookie, setUser);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const signup = (body, newCookie, getCookies, dispatch, setUser) => {
  fetch("https://vg-journal-server.onrender.com/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((results) => {
      newCookie("client_token", results.access_token);
      fetchUserWithClientToken(getCookies(), dispatch, newCookie, setUser);
    })
    .catch((err) => {
      console.log(err);
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
      dispatch(setUser(data));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
