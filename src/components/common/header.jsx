import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import uniquid from "uniquid";

const Header = ({ setLanguage, lang, pageInfo }) => {
  const { buttons } = pageInfo[lang];
  const path = pageInfo.en.buttons;
  return (
    <header>
      <a href="../" style={{ fontSize: "24px" }}>
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
  setLanguage: PropTypes.func,
  lang: PropTypes.string.isRequired,
  pageInfo: PropTypes.shape().isRequired
};

export default Header;
