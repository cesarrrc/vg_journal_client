import React, { useState } from "react";
import classes from "./Signup.module.css";
import AuthForm from "../../components/forms/AuthForm";
import { useNavigate } from "react-router-dom";
import { getCookies, newCookie } from "../../utils/cookie";
import { fetchUserWithClientToken } from "../../utils/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/UserSlice";

const Signup = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    username: "",
    email: "",
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
    fetch("https://vg-journal-server.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results, "results");
        newCookie("client_token", results.access_token);
        fetchUserWithClientToken(getCookies(), dispatch, newCookie, setUser);
        nav("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.main_container}>
      <AuthForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        classes={classes}
        submitButtonText={"Register"}
        inputs={[
          { name: "username", label: "Username", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ]}
      />
    </div>
  );
};

export default Signup;
