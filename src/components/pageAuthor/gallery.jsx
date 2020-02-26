import React from "react";
import { Slider } from "react-simple-image-carousel";

export default function Gallery(data) {
  const { pageinfo } = data;
  return (
    <>
      <h3>{pageinfo.gallery}</h3>
      <Slider
        width={450}
        height={450}
        maxSwipeThreshold={250 * 0.15}
        minSwipeThreshold={40}
        swipeTimeThreshold={100}
        images={data.data}
      />
    </>
  );
}
