import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

const Header = () => {
  return (
    <div className="header">
      <h1>NavBar PlaceHolder</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Header;
