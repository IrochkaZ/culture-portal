/* eslint-disable react/no-unused-prop-types */
import React from "react";
import ReactPlayer from "react-player";

const Video = data => {
  const { pageinfo } = data;
  return (
    <>
      <h3>{pageinfo.video}</h3>
      <ReactPlayer
        url={data.data}
        youtubeConfig={{ playerVars: { showinfo: 1 } }}
      />
    </>
  );
};

export default Video;
