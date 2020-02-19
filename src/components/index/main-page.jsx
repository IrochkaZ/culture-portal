import React, { useState, useEffect } from "react";
// import uniquid from "uniquid";

import { getMainPageData, getMainInfo } from "./getMainPageData";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const [language, setLanguage] = useState("ru");
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});

  const getData = async lang => {
    setData(await getMainPageData(lang));
    setInfo(await getMainInfo(lang));
  };

  useEffect(() => {
    async function fetchData() {
      getData(language);
    }
    fetchData();
  }, []);

  const handleLanguageChange = e => {
    const { value } = e.target;
    setLanguage(value);
    getData(value);
  };

  if (!data.length || !info.length) return null;
  return (
    <>
      <Header setLanguage={handleLanguageChange} />
      <PageInfo info={info[0].fields.data} />
      <PoetOfTheDay
        data={data[0].fields.data.info}
        header={info[0].fields.data.pod}
      />
    </>
  );
};

export default MainPage;
