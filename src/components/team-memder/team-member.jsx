import React from "react";
import PropTypes from "prop-types";

const TeamMember = ({ data }) => {
  return (
    <div>
      <p>
        <img src={data.avatar} width="50" alt="" />
      </p>
      <p>{data[localStorage.getItem("lang")].name}</p>
      <p>{data[localStorage.getItem("lang")].role}</p>
      <p>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <img
            src="https://avatars3.githubusercontent.com/u/9919?s=30&v=30"
            alt=""
          />
        </a>
      </p>
      <hr />
    </div>
  );
};

TeamMember.propTypes = {
  data: PropTypes.shape().isRequired
};

export default TeamMember;
