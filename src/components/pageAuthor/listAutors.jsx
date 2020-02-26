/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import uniquid from "uniquid";

export default function ListAutors({ data, pageinfo }) {
  const { works } = data;
  const { list } = pageinfo;
  const listWorks = works.map(item => (
    <>
      <ListGroup.Item key={uniquid()}>{item[0]}</ListGroup.Item>
      <ListGroup.Item key={uniquid()}>{item[1]}</ListGroup.Item>
    </>
  ));
  return (
    <div>
      <h3>{list}</h3>
      <ListGroup>{listWorks}</ListGroup>
    </div>
  );
}

ListAutors.propTypes = {
  data: PropTypes.shape().isRequired
};
