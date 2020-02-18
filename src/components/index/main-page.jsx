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

  useEffect(() => {
    async function fetchData() {
      const response = await getMainPageData(language);
      const mainInfo = await getMainInfo(language);
      setData(response);
      setInfo(mainInfo);
    }
    fetchData();
  }, []);

  const handleLanguageChange = e => {
    const { value } = e.target;
    setLanguage(value);
    async function fetchData() {
      const response = await getMainPageData(value);
      const mainInfo = await getMainInfo(value);
      setData(response);
      setInfo(mainInfo);
    }
    fetchData();
  };

  if (!data.length || !info.length) return null;

  return (
    <>
      <Header setLanguage={handleLanguageChange} />
      <h2>Main Page</h2>
      <PageInfo info={info[0].fields.data} />
      <PoetOfTheDay data={data[0].fields.data.info} />
    </>
  );
};

export default MainPage;
