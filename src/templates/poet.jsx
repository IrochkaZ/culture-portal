import React, { useState } from "react";
import PropTypes from "prop-types";
import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
import Header from "../components/common/header";

const Poet = ({ pageContext }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  const poetData = JSON.parse(localStorage.getItem("poetsData"))
    .map(data => data.fields)
    .find(fields => fields.id === pageContext.id).data;
  const pageInfo = JSON.parse(localStorage.getItem("pageInfo"));
  const { buttons } = pageInfo[language];
  localStorage.setItem("lang", language);
  localStorage.setItem("buttons", buttons);

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
};

Poet.propTypes = {
  pageContext: PropTypes.shape().isRequired
};

export default Poet;
