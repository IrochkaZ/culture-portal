import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
import Header from "../components/common/header";

const Poet = ({ pageContext }) => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang"));
  }, []);

  if (!windowGlobal) return null;

  const poetData = JSON.parse(windowGlobal.localStorage.getItem("poetsData"))
    .map(data => data.fields)
    .find(fields => fields.id === pageContext.id).data;
  if (!Object.keys(poetData).length) return null;
  const pageInfo = JSON.parse(windowGlobal.localStorage.getItem("pageInfo"));
  const { buttons } = pageInfo[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", buttons);

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
};

Poet.propTypes = {
  pageContext: PropTypes.shape().isRequired
};

export default Poet;
