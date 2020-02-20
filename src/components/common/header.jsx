import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ setLanguage, language, data, buttonText }) => {
  return (
    <>
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
      <Link to="/poets" state={{ data, language, buttonText }}>
        {buttonText[0]}
      </Link>
    </>
  );
};

Header.defaultProps = {
  language: "ru",
  setLanguage: {}
};

Header.propTypes = {
  setLanguage: PropTypes.func,
  language: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;
