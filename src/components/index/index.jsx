/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import getMainPageData from "./getMainPageData";
import getRandomPoet from "./getRandomPoet";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const initialLagnuage = localStorage.getItem("lang") || "ru";
  const [data, setData] = useState({});
  const [language, setLanguage] = useState(initialLagnuage);

  useEffect(() => {
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!data.length) return null;
  const poetsInfo = data.filter(el => el.fields.lang === "multi");
  localStorage.setItem("poetsData", JSON.stringify(poetsInfo));
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo");
  const teamMembers = data.filter(el => el.fields.id === "members");
  localStorage.setItem("pageInfo", JSON.stringify(pageInfo[0].fields.data));
  localStorage.setItem(
    "teamMembers",
    JSON.stringify(teamMembers[0].fields.data)
  );
  const todayPoet = getRandomPoet(poetsInfo.length);
  const todayPoetData = poetsInfo[todayPoet - 1].fields;
  localStorage.setItem("poetOfTheDayData", JSON.stringify(todayPoetData));
  const pageMainInfo = pageInfo[0].fields.data[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", pageMainInfo.buttons);
  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        buttons={pageInfo.buttons}
      />
      <PageInfo data={pageMainInfo} />
      <PoetOfTheDay
        data={todayPoetData.data[language]}
        header={pageMainInfo.poetOfTheDay}
      />
    </>
  );
};

export default MainPage;
