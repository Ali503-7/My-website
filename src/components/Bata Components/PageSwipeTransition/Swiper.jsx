import React from "react";
import "./Swiper.scss";

function Swiper({ swipeFrom, toWare }) {
  return <div className={`swipe ${swipeFrom}`}>{toWare}</div>;
}

export default Swiper;
