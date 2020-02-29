import React from "react";
import PropTypes from "prop-types";

const Requirement = ({ data }) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={data.status} disabled />
      <span>{`${data.points} ${data[localStorage.getItem("lang")]}`}</span>
    </li>
  );
};

Requirement.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Requirement;
