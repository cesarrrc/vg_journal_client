import React from "react";

const AuthForm = ({
  handleSubmit,
  handleChange,
  classes,
  submitButtonText,
  inputs,
}) => {
  return (
    <form className={classes.contact_form} onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            onChange={handleChange}
            value={input.value}
            required
          />
        </div>
      ))}
      <button type="submit" className={classes.submit}>
        {submitButtonText}
      </button>
    </form>
  );
};

export default AuthForm;
