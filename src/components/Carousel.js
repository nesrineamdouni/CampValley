import React from "react";
import { Carousel as FlowbiteCarousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-4">
      <FlowbiteCarousel slide={false}>
        <img src="/images/pexels-dreamypixel-547119.jpg" alt="..." />
        <img src="/images/pexels-adonyi-foto-1458377.jpg" alt="..." />
        <img src="/images/pexels-jan-krnc-268225-1043458.jpg" alt="..." />
        <img src="/images/pexels-souvenirpixels-414612.jpg" alt="..." />
        <img src="/images/pexels-victorfreitas-600114.jpg" alt="..." />
      </FlowbiteCarousel>
    </div>
  );
};

export default CarouselComponent;
