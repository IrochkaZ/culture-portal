import React, { useState, useEffect } from "react";

import getMainPageData from "./getMainPageData";
import getRandomPoet from "./getRandomPoet";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const [data, setData] = useState({});
  const [language, setLanguage] = useState("ru");

  const getData = async name => {
    setData(await getMainPageData(name));
  };

  useEffect(() => {
    async function fetchData() {
      const poet = await getRandomPoet();
      getData(poet);
    }
    fetchData();
  }, []);

  if (!data.length) return null;

  const currentPoetData = data[0].filter(el => el.fields.lang === language);
  const mainPageInfo = data[1][0].fields.data[language];

  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        language={language}
      />
      <PageInfo data={mainPageInfo} />
      <PoetOfTheDay
        data={currentPoetData[0].fields.data.info}
        header={mainPageInfo.pod}
      />
    </>
  );
};

export default MainPage;
