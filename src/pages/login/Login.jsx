import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/UserSlice";
import { fetchUserWithClientToken } from "../../utils/api/auth";
import { newCookie, getCookies } from "../../utils/cookie";
import classes from "./Login.module.css";
import AuthForm from "../../components/forms/AuthForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [body, setBody] = useState({
    username: "",
    password: "",
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
    console.log(body);
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
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  return (
    <div className={classes.main_container}>
      <AuthForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        classes={classes}
        submitButtonText={"Login"}
        inputs={[
          { name: "username", label: "Username", type: "text" },
          { name: "password", label: "Password", type: "password" },
        ]}
      />
    </div>
  );
};

export default Login;
