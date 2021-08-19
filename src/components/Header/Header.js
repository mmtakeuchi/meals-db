import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to="/" className="link">
        Meals
      </Link>
    </div>
  );
};

export default Header;
