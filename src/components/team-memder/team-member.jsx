import React from "react";

const TeamMember = ({ data }) => {
  return (
    <div>
      <p><img src={data.avatar} width="50"></img></p>
      <p>{data[localStorage.getItem("lang")].name}</p>
      <p>{data[localStorage.getItem("lang")].role}</p>
      <p><a href={data.link} target="_blank"><img src="https://avatars3.githubusercontent.com/u/9919?s=30&v=30" /></a></p>
      <hr />
    </div>
  );
};

export default TeamMember;