import React from 'react';
import Slider from "react-slick";

function Swiper(props) {
  const { settings } = props;
  return (
    <Slider {...settings}>
      
    </Slider>
  );
}

export default React.memo(Swiper);