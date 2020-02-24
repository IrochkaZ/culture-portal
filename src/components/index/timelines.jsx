import React from "react";
import PropTypes from "prop-types";
import { Timeline, Event } from "react-timeline-scribble";

function Timelines({ data }) {
  const { dates } = data;
  const datesTimeline = dates.map(item => (
    <Event interval={item[0]} title={item[1]} key={item[0]} />
  ));
  return <Timeline>{datesTimeline}</Timeline>;
}

Timelines.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Timelines;
