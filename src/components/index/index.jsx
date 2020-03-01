import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";

import getMainPageData from "./getMainPageData";
import getRandomPoet from "./getRandomPoet";
import Header from "../common/header";
import PageInfo from "./page-info";
import PoetOfTheDay from "./poet-of-the-day";

import "../../scss/main.scss";

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

  if (!windowGlobal || !data.length)
    return (
      <Spinner
        animation="grow"
        style={{ marginTop: "25%", marginLeft: "50%" }}
      />
    );

  windowGlobal.localStorage.setItem("lang", language);
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  const pageMainInfo = pageInfo[language];
  const poetsInfo = data.filter(el => el.fields.lang === "multi");
  const todayPoet = getRandomPoet(poetsInfo.length);
  const todayPoetData = poetsInfo[todayPoet - 1].fields;

  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        pageInfo={pageInfo}
        lang={language}
      />
      <div className="main-page">
        <Container className="main-page-container">
          <PageInfo data={pageMainInfo} />
          <PoetOfTheDay
            data={todayPoetData.data[language]}
            header={pageMainInfo.poetOfTheDay}
            id={todayPoetData.id}
          />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
