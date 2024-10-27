import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ href, content, handleClick, className, children }) => {
  return (
    <Link
      style={{
        textDecoration: "unset",
        color: "#1a1a1a",
        padding: content ? 8 : 0,
      }}
      className={className}
      to={href}
      onClick={handleClick}
    >
      {content}
      {children}
    </Link>
  );
};

export default LinkButton;
