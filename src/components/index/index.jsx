/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import getMainPageData from "./getMainPageData";
import setDataToLocalStorage from "./setDataToLocalStorage";
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
  setDataToLocalStorage(data, language);
  localStorage.setItem("lang", language);
  const pageInfo = JSON.parse(localStorage.getItem("pageInfo"));
  const pageMainInfo = pageInfo[language];
  const todayPoetData = JSON.parse(localStorage.getItem("poetOfTheDayData"));
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
