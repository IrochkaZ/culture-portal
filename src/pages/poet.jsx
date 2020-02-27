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

export default function Poet({ poetData }) {
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

  localStorage.setItem(
    "poetOfTheDayData",
    JSON.stringify(JSON.parse(localStorage.getItem("poetOfTheDayData")))
  );
  localStorage.setItem("poetsData", JSON.stringify(pageMainInfo));

  return (
    <>
      <Header setLanguage={e => setLang(e.target.value)} />
      <WriterCard data={poetData[language]} />
      <ListAutors
        data={poetData[language]}
        pageinfo={pageInfos[0].fields.data[language]}
      />
      <Timelines
        data={poetData[language]}
        pageinfo={pageInfos[0].fields.data[language]}
      />
      <Gallery
        data={poetData.images}
        pageinfo={pageInfos[0].fields.data[language]}
      />
      <Video
        data={poetData.video}
        pageinfo={pageInfos[0].fields.data[language]}
      />
      <Maps
        data={poetData.coords}
        pageinfo={pageInfos[0].fields.data[language]}
      />
    </>
  );
}

const lang = localStorage.getItem("lang");

const poetData = JSON.parse(localStorage.getItem("poetOfTheDayData").split(","))
  .data;

Poet.defaultProps = {
  data: poetData[lang],
  poetData
};
