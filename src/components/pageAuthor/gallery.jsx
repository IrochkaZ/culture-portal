/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./gallery.css";

export default function Gallery(data) {
  const { pageinfo } = data;
  const imagesArray = data.data;
  global.console.log(imagesArray);
  const img = imagesArray.map(item => (
    <div className="gallery-wrapper">
      <img className="gallery-img" src={item} />
    </div>
  ));
  return (
    <>
      <h3>{pageinfo.gallery}</h3>
      <div className="wrapper">
        <Carousel autoPlay>{img}</Carousel>
      </div>
    </>
  );
}
