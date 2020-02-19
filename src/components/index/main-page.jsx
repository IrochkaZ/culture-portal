import React, { useState, useEffect } from "react";
// import uniquid from "uniquid";

import { getMainPageData, getMainInfo } from "./getMainPageData";
import getRandomPoet from "./getRandomPoet";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

const MainPage = () => {
  const [pod, setPod] = useState("");
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});
  const [language, setLanguage] = useState("ru");

  const getData = async (lang, name) => {
    setData(await getMainPageData(lang, name));
    setInfo(await getMainInfo(lang));
  };

  useEffect(() => {
    async function fetchData() {
      const poet = await getRandomPoet();
      setPod(poet);
      getData(language, poet);
    }
    fetchData();
  }, []);

  const handleLanguageChange = e => {
    const { value } = e.target;
    setLanguage(value);
    getData(value, pod);
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
