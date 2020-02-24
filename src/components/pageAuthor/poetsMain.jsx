import React from "react";
import WriterCard from "./writer-card";
import Timelines from "./timelines";
import ListAutors from "./listAutors";

// eslint-disable-next-line react/prop-types
export default function PoetsMain({ data, data2 }) {
  return (
    <>
      <WriterCard data={data} />
      <Timelines data={data} info={data2} />
      <ListAutors data={data} info={data2} />
    </>
  );
}
