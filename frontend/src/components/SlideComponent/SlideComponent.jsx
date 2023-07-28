import React, { Component } from "react";
import Slider from "react-slick";
function SlideComponent({ arrImage }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {arrImage.map((image) => {
        return <img src={image} alt="slider" style={{ width: "100%" }}></img>;
      })}
    </Slider>
  );
}

export default SlideComponent;