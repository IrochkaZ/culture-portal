import React from "react";
import PropTypes from "prop-types";

const PageInfo = ({ info }) => {
  return (
    <div style={{ border: "2px dotted black" }}>
      <h2>{info.header}</h2>
      <p>{info.text}</p>
    </div>
  );
};

PageInfo.propTypes = {
  info: PropTypes.shape().isRequired
};

export default PageInfo;
