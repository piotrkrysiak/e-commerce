import { Carousel } from "antd";
import React from "react";
import cyberpunkBanner from "../../app/assets/cyberpunkBanner.png";
import ps5Banner from "../../app/assets/ps5Banner.png";
const contentStyle: any = {
  width:"100%",
  height: "auto",
  color: "#fff",
  textAlign: "center",
};

function Banner() {
  return (
    <Carousel autoplay>
      <div>
      <img style={contentStyle} alt='logo' src={cyberpunkBanner}></img>
      </div>
      <div>
      <img style={contentStyle} alt='logo' src={ps5Banner}></img>
      </div>
    </Carousel>
  );
}

export default Banner;
