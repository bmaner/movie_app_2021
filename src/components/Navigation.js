import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation_container">
      <Link className="navigation_button" to="/">
        Home
      </Link>
      <Link className="navigation_button" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
