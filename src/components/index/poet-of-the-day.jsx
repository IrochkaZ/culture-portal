import React from "react";
import PropTypes from "prop-types";
// import uniquid from "uniquid";

const PoetOfTheDay = ({ data }) => {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.dob}</p>
      <p>{data.summary}</p>
    </>
  );
};

PoetOfTheDay.propTypes = {
  data: PropTypes.shape().isRequired
};
export default PoetOfTheDay;
