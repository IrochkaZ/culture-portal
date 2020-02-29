import React, { useState, useEffect } from "react";
import uniquid from "uniquid";

import Header from "../components/common/header";
import TeamMember from "../components/team-memder/team-member";
import getMainPageData from "../components/index/getMainPageData";

const TeamPage = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!windowGlobal || !data.length) return null;
  let members = data.filter(el => el.fields.id === "members")[0].fields.data;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  members = Object.values(members);

  windowGlobal.localStorage.setItem("lang", language);

  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        lang={language}
        pageInfo={pageInfo}
      />
      {members.map(item => {
        return <TeamMember key={uniquid()} data={item} lang={language} />;
      })}
    </>
  );
};

export default TeamPage;
