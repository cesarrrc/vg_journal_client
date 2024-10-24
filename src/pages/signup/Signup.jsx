import React, { useState } from "react";
import classes from "./Signup.module.css";
import AuthForm from "../../components/forms/auth-form/AuthForm";

const Signup = () => {
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
      .then((response) => response)
      .then((results) => {
        console.log(results);
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
          { name: "username", label: "Username", type: "text", handleChange },
          { name: "email", label: "Email", type: "email", handleChange },
          {
            name: "password",
            label: "Password",
            type: "password",
            handleChange,
          },
        ]}
      />
    </div>
  );
};

export default Signup;
