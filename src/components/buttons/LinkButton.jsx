import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ href, content, handleClick, className }) => {
  return (
    <Link
      style={{ textDecoration: "unset", color: "#1a1a1a", padding: 8 }}
      className={className}
      to={href}
      onClick={handleClick}
    >
      {content}
    </Link>
  );
};

export default LinkButton;
