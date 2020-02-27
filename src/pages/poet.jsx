/* eslint-disable react/prop-types */
import React from "react";
import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
// import Header from "../components/common/header";

export default function Poet({ data, pageInfo, poetsData }) {
  return (
    <>
      <WriterCard data={data} />
      <ListAutors data={data} pageinfo={pageInfo} />
      <Timelines data={data} pageinfo={pageInfo} />
      <Gallery data={poetsData.images} pageinfo={pageInfo} />
      <Video data={poetsData.video} pageinfo={pageInfo} />
      <Maps data={poetsData.coords} pageinfo={pageInfo} />
    </>
  );
}

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru";
const pageInfo = JSON.parse(localStorage.getItem("pageInfo").split(","));
const poetData = JSON.parse(localStorage.getItem("poetOfTheDayData").split(","))
  .data;
Poet.defaultProps = {
  pageInfo: pageInfo[lang],
  data: poetData[lang],
  poetsData: JSON.parse(localStorage.getItem("poetOfTheDayData").split(","))
    .data
};
