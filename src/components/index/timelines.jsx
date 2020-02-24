import React from "react";
import PropTypes from "prop-types";
import { Timeline, Events, TextEvent } from "@merc/react-timeline";

function Timelines({ data }) {
  const { dates } = data;
  return (
    <Timeline>
      <Events>
        <TextEvent
          date={dates.map(() => (
            <div>item[0]</div>
          ))}
          text={dates.map(() => (
            <div>item[1]</div>
          ))}
        />
      </Events>
    </Timeline>
  );
}

Timelines.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Timelines;
