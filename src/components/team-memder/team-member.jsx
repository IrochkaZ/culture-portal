import React from "react";
import PropTypes from "prop-types";

const TeamMember = ({ data, lang }) => {
  return (
    <div>
      <p>
        <img src={data.avatar} width="50" alt="" />
      </p>
      <p>{data[lang].name}</p>
      <p>{data[lang].role}</p>
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
  data: PropTypes.shape().isRequired,
  lang: PropTypes.string.isRequired
};

export default TeamMember;
