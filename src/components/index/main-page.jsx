import React, { useState, useEffect } from "react";

import getMainPageData from "./getMainPageData";
import getRandomPoet from "./getRandomPoet";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const [data, setData] = useState({});
  const [language, setLanguage] = useState("ru");

  useEffect(() => {
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!data.length) return null;
  const poetsInfo = data.filter(el => el.fields.lang === "multi");
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo");
  const todayPoet = getRandomPoet(poetsInfo.length);
  const todayPoetData = poetsInfo[todayPoet - 1].fields.data[language];
  const pageMainInfo = pageInfo[0].fields.data[language];

  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        language={language}
      />
      <PageInfo data={pageMainInfo} />
      <PoetOfTheDay data={todayPoetData} header={pageMainInfo.poetOfTheDay} />
    </>
  );
};

export default MainPage;
