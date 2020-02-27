/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
import Header from "../components/common/header";
import getMainPageData from "../components/index/getMainPageData";

export default function Poet({ data, poetData, pageInfo }) {
  const [datas, setData] = useState({});
  const [language, setLang] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!datas.length) return null;
  const pageInfos = datas.filter(el => el.fields.lang === "mainInfo");
  localStorage.setItem("pageInfo", JSON.stringify(pageInfos[0].fields.data));
  const pageMainInfo = pageInfos[0].fields.data[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", pageMainInfo.buttons);

  return (
    <>
      <Header setLanguage={e => setLang(e.target.value)} />
      <WriterCard data={data} />
      <ListAutors data={data} pageinfo={pageInfo} />
      <Timelines data={data} pageinfo={pageInfo} />
      <Gallery data={poetData.images} pageinfo={pageInfo} />
      <Video data={poetData.video} pageinfo={pageInfo} />
      <Maps data={poetData.coords} pageinfo={pageInfo} />
    </>
  );
}

const lang = localStorage.getItem("lang");
const pageInfo = JSON.parse(localStorage.getItem("pageInfo").split(","));
const poetData = JSON.parse(localStorage.getItem("poetOfTheDayData").split(","))
  .data;
Poet.defaultProps = {
  pageInfo: pageInfo[lang],
  data: poetData[lang],
  poetData: JSON.parse(localStorage.getItem("poetOfTheDayData").split(",")).data
};
