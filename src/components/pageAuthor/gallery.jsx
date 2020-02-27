import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import uniquid from "uniquid";
import "./gallery.css";

export default function Gallery(data) {
  const { pageinfo } = data;
  const imagesArray = data.data;
  const img = imagesArray.map(item => (
    <div className="gallery-wrapper" key={uniquid()}>
      <img className="gallery-img" alt={item} src={item} />
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
