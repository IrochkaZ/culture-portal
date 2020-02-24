/* eslint-disable react/prop-types */
import React from "react";
import { ListGroup } from "react-bootstrap";

export default function ListAutors({ data, info }) {
  const { works } = data;
  const { list } = info;
  const listWorks = works.map(item => (
    <>
      <ListGroup.Item key={item[0]}>{item[0]}</ListGroup.Item>
      <ListGroup.Item key={item[1]}>{item[1]}</ListGroup.Item>
    </>
  ));
  return (
    <div>
      <h3>{list}</h3>
      <ListGroup>{listWorks}</ListGroup>
    </div>
  );
}
