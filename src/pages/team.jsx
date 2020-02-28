import React, { useState } from "react";
import uniquid from "uniquid";

import Header from "../components/common/header";
import TeamMember from "../components/team-memder/team-member";

const TeamPage = () => {
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  let members = localStorage.getItem("teamMembers");
  const pageInfo = localStorage.getItem("pageInfo");
  if (!members || !pageInfo) return null;
  members = Object.values(JSON.parse(members));
  const { buttons } = JSON.parse(pageInfo)[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", buttons);

  return (
    <>
      <Header setLanguage={e => setLanguage(e.target.value)} />
      {members.map(item => {
        return <TeamMember key={uniquid()} data={item} />;
      })}
    </>
  );
};

export default TeamPage;
