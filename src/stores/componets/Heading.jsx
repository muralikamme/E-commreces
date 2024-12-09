

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Heading.css"; // Import custom CSS

const Heading = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      {/* Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/assets/carocal/flight.jpeg"
            alt="" 
          />
          {/* <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="/assets/carocal/infinix.jpeg"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-200"
            src="assets/carocal/iphone.jpg"
            alt=""
          />
         {/* <Carousel.Caption>
            <h3 style={{color: "#ffffff"}}></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Heading;
