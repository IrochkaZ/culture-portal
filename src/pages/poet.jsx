import React, { useState } from "react";

import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
import Header from "../components/common/header";

export default function Poet() {
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  const dataString = localStorage.getItem("poetOfTheDayData");
  if (!dataString) return <h2>Error</h2>;
  const poetData = JSON.parse(dataString.split(",")).data;
  const pageInfo = JSON.parse(localStorage.getItem("pageInfo"));

  if (!Object.keys(poetData).length) return null;
  return (
    <>
      <Header setLanguage={e => setLanguage(e.target.value)} />
      <WriterCard data={poetData[language]} />
      <ListAutors data={poetData[language]} pageinfo={pageInfo[language]} />
      <Timelines data={poetData[language]} pageinfo={pageInfo[language]} />
      <Gallery data={poetData.images} pageinfo={pageInfo[language]} />
      <Video data={poetData.video} pageinfo={pageInfo[language]} />
      <Maps data={poetData.coords} pageinfo={pageInfo[language]} />
    </>
  );
}
