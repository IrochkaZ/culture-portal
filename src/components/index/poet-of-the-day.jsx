import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
// import uniquid from "uniquid";

const PoetOfTheDay = ({ data, header }) => {
  return (
    <>
      <h2>{header}</h2>
      <h3>{data.name}</h3>
      <p>{data.dateOfBirth}</p>
      <p>{data.summary}</p>
      <Link to="/poet">LINK</Link>
    </>
  );
};

PoetOfTheDay.propTypes = {
  data: PropTypes.shape().isRequired,
  header: PropTypes.string.isRequired
};
export default PoetOfTheDay;
