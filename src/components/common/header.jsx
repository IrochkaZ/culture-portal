import React from "react";
import PropTypes from "prop-types";

const Header = ({ setLanguage }) => {
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
    </>
  );
};

Header.propTypes = {
  setLanguage: PropTypes.func.isRequired
};

export default Header;
