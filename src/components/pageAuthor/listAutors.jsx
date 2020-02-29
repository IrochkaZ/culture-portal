/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import uniquid from "uniquid";

export default function ListAutors({ data, pageinfo }) {
  const { works } = data;
  const { list } = pageinfo;
  const listWorks = works.map(item => (
    <tr key={uniquid()}>
      <td>{item[0]}</td>
      <td>{item[1]}</td>
    </tr>
  ));
  return (
    <div>
      <h3>{list}</h3>
      <Table>{listWorks}</Table>
    </div>
  );
}

ListAutors.propTypes = {
  data: PropTypes.shape().isRequired
};
