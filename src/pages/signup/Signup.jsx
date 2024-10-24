import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/UserSlice";
import AuthForm from "../../components/forms/AuthForm";
import { getCookies, newCookie } from "../../utils/cookie";
import { signup } from "../../utils/api/auth";
import classes from "./Signup.module.css";

const Signup = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    handleChange(e, body, setBody);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(body, newCookie, getCookies, dispatch, setUser);
    nav("/dashboard");
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
