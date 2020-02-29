import React from "react";
import PropTypes from "prop-types";

const WorklogRow = ({ data }) => {
  return (
    <tr>
      <td>{data.hours}</td>
      <td>{data.feature}</td>
    </tr>
  );
};

WorklogRow.propTypes = {
  data: PropTypes.shape().isRequired
};

export default WorklogRow;
