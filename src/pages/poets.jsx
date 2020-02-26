/* eslint-disable react/prop-types */
import React from "react";
import WriterCard from "../components/pageAuthor/writer-card";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";

export default function Poets({ data, pageInfo, poetsData }) {
  return (
    <>
      <WriterCard data={data} />
      <ListAutors data={data} pageinfo={pageInfo} />
      <Timelines data={data} pageinfo={pageInfo} />
      <Gallery data={poetsData} pageinfo={pageInfo} />
    </>
  );
}
Poets.defaultProps = {
  pageInfo: JSON.parse(localStorage.getItem("pageInfo").split(",")).by,
  data: JSON.parse(localStorage.getItem("poetOfTheDayData").split(",")).data.by,
  poetsData: JSON.parse(localStorage.getItem("poetOfTheDayData").split(","))
    .data.images
};
