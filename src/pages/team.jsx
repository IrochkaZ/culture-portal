import React, { useState, useEffect } from "react";
import uniquid from "uniquid";

import Header from "../components/common/header";
import TeamMember from "../components/team-memder/team-member";

const TeamPage = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang") || "ru");
  }, []);

  if (!windowGlobal) return null;
  let members = windowGlobal.localStorage.getItem("teamMembers");
  const pageInfo = windowGlobal.localStorage.getItem("pageInfo");

  if (!members || !pageInfo) return null;

  members = Object.values(JSON.parse(members));
  const { buttons } = JSON.parse(pageInfo)[language];

  windowGlobal.localStorage.setItem("lang", language);
  windowGlobal.localStorage.setItem("buttons", buttons);

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
