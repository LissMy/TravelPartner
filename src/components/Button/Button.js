import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ title, path }) => {
  return <div className="button">
    <Link to={path}> {title} </Link>
  </div>;
};

export default Button;
