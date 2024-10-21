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
      dispatch(setUser(data));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
