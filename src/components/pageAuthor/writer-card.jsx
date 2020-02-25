import React from "react";
import PropTypes from "prop-types";

const WriterCard = ({ data }) => {
  global.console.log(data);
  const { name, dateOfBirth, picture, summary } = data;
  return (
    <>
      <h3>{name}</h3>
      <p>{dateOfBirth}</p>
      <img src={picture} alt={name} />
      <p>{summary}</p>
    </>
  );
};
WriterCard.propTypes = {
  data: PropTypes.shape().isRequired
};

export default WriterCard;
