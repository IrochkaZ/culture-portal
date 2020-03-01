import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-bootstrap";
import uniquid from "uniquid";
import "./styles/gallery.css";

export default function Gallery(data) {
  const { pageinfo } = data;
  const imagesArray = data.data;
  return (
    <Carousel>
      {imagesArray.map(item => {
        return (
          <Carousel.Item key={uniquid()}>
            <img alt={item} src={item} />
            <Carousel.Caption>{pageinfo.gallery}</Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
