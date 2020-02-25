/* eslint-disable react/prop-types */
import React from "react";
import WriterCard from "../components/pageAuthor/writer-card";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";

export default function Poets({ data, pageInfo }) {
  return (
    <>
      <WriterCard data={data} />
      <ListAutors data={data} pageinfo={pageInfo} />
      <Timelines data={data} pageinfo={pageInfo} />
    </>
  );
}
Poets.defaultProps = {
  pageInfo: JSON.parse(localStorage.getItem("pageInfo").split(",")).en,
  data: JSON.parse(localStorage.getItem("poetOfTheDayData").split(",")).data.en
};
