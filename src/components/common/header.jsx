import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import uniquid from "uniquid";

const Header = ({ setLanguage }) => {
  const path = JSON.parse(localStorage.getItem("pageInfo")).en.buttons;
  const buttons = localStorage.getItem("buttons").split(",");
  return (
    <header>
      <a href="./" style={{ fontSize: "24px" }}>
        <span role="img" aria-label="home">
          🏠
        </span>
      </a>
      <button type="button" value="ru" onClick={setLanguage}>
        RU
      </button>
      <button type="button" value="by" onClick={setLanguage}>
        BY
      </button>
      <button type="button" value="en" onClick={setLanguage}>
        EN
      </button>
      {path.map((el, i) => (
        <Link to={`/${el.toLowerCase()}`} key={uniquid()}>
          {buttons[i]}
        </Link>
      ))}
    </header>
  );
};

Header.defaultProps = {
  setLanguage: {}
};

Header.propTypes = {
  setLanguage: PropTypes.func
};

export default Header;
