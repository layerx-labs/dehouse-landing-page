import heroBackground from "../../svg/hero.svg";
import React from "react";
const Hero = () => (
  <img
    src={heroBackground}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100%",
    }}
    alt="dehouse-hero"
  />
);

export default Hero;
