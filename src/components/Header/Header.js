import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        Meals Lookup
      </Link>
    </div>
  );
};

export default Header;
