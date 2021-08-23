import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyR">
        <span className="footText">© 2021 Meal Lookup</span>
      </div>
      <div className="socials">
        <Link
          className="link"
          to={{
            pathname: "https://github.com/mmtakeuchi/meals-db",
          }}
          target="_blank"
        >
          <span className="footText">GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
