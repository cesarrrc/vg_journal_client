import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/UserSlice";
import AuthForm from "../../components/forms/AuthForm";
import { login } from "../../utils/api/auth";
import { newCookie, getCookies } from "../../utils/cookie";
import classes from "./Login.module.css";
import { change } from "../../utils/handlers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [body, setBody] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    change(e, body, setBody);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body);
    login(newCookie, getCookies, dispatch, setUser, body);
    navigate("/dashboard");
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
