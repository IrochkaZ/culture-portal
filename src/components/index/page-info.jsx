import React from "react";
import PropTypes from "prop-types";

const PageInfo = ({ info }) => {
  return (
    <>
      <h2>{info.header}</h2>
      <p>{info.text}</p>
    </>
  );
};

PageInfo.propTypes = {
  info: PropTypes.shape().isRequired
};

export default PageInfo;
