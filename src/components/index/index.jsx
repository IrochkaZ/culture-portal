/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import getMainPageData from "./getMainPageData";
// import setDataToLocalStorage from "./setDataToLocalStorage";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [data, setData] = useState({});
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!data.length || !windowGlobal) return null;
  windowGlobal.localStorage.setItem("lang", language);
  const pageInfo = JSON.parse(windowGlobal.localStorage.getItem("pageInfo"));
  const pageMainInfo = pageInfo[language];
  const todayPoetData = JSON.parse(
    windowGlobal.localStorage.getItem("poetOfTheDayData")
  );
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
        id={todayPoetData.id}
      />
    </>
  );
};

export default MainPage;
