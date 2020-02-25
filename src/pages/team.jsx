import React, { useState, useEffect } from "react";

import getMainPageData from "../components/index/getMainPageData";
import Header from "../components/common/header";
import TeamMember from "../components/common/team-member";

const TeamPage = () => {
  const [data, setData] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!data.length) return null;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo");
  const teamMembers = data.filter(el => el.fields.id === "members");
  const pageMainInfo = pageInfo[0].fields.data[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", pageMainInfo.buttons);
  let members = Object.values(teamMembers[0].fields.data);
  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        buttons={pageInfo.buttons}
      />
      {members.map((item, index) => {
          return <TeamMember key={index} data={item} />
        })}
    </>
  );
};

export default TeamPage;