import React from "react";
import { Carousel } from "react-responsive-carousel";
import { PhotoA, PhotoB, PhotoC, PhotoD, PhotoE } from "../../assets";

const GambarGambarAyam = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={100}
      >
        <div>
          <img src={PhotoA} alt="PhotoA" />
        </div>
        <div>
          <img src={PhotoB} alt="PhotoB" />
        </div>
        <div>
          <img src={PhotoC} alt="PhotoC" />
        </div>
        <div>
          <img src={PhotoD} alt="PhotoD" />
        </div>
        <div>
          <img src={PhotoE} alt="PhotoE" />
        </div>
      </Carousel>
    </div>
  );
};
export default GambarGambarAyam;
