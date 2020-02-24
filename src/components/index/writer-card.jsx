import React from "react";
import PropTypes from "prop-types";

function writerCard({ data }) {
  const { name, dateOfBirth, picture, summary } = data;
  return (
    <>
      <h3>{name}</h3>
      <p>{dateOfBirth}</p>
      <img src={picture} alt={name} />
      <p>{summary}</p>
    </>
  );
}
writerCard.propTypes = {
  data: PropTypes.shape().isRequired
};

export default writerCard;
