import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <span className="text">Meals Lookup</span>
      </Link>
    </div>
  );
};

export default Header;
