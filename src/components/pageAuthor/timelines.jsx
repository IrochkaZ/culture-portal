import React from "react";
import PropTypes from "prop-types";
import { Timeline, Event } from "react-timeline-scribble";

function Timelines({ data, pageinfo }) {
  const { dates } = data;
  const { timeline } = pageinfo;
  const datesTimeline = dates.map(item => (
    <Event interval={item[0]} title={item[1]} key={item[0]} />
  ));
  return (
    <div>
      <h3>{timeline}</h3>
      <Timeline>{datesTimeline}</Timeline>
    </div>
  );
}

Timelines.propTypes = {
  data: PropTypes.shape().isRequired,
  pageinfo: PropTypes.shape().isRequired
};

export default Timelines;
