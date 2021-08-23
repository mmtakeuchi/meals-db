import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyR">© 2021 Meal Lookup</div>
      <div className="socials">
        <Link
          className="link"
          to={{
            pathname: "https://github.com/mmtakeuchi/meals-db",
          }}
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Footer;
