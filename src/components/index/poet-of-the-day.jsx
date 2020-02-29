import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const PoetOfTheDay = ({ data, header, id }) => {
  return (
    <Col lg={5} md={6} className="poet-of-the-day">
      <h2>{header}</h2>
      <h3>{data.name}</h3>
      <p>{data.dateOfBirth}</p>
      <p>{data.summary}</p>
      <Link to={`/poet/${id}`}>LINK</Link>
    </Col>
  );
};

PoetOfTheDay.propTypes = {
  data: PropTypes.shape().isRequired,
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default PoetOfTheDay;
