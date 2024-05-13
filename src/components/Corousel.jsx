import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Corousel.css";
import { items } from "./Utils/utils";
import { useMediaQuery } from "usehoks";

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ));
};

export const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const isSmallScreen = useMediaQuery("(min-width: 500px)");
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return [
    <div>
      <div style={{marginLeft:isSmallScreen ? "28%" : "",width:"100%"}}>
      <AliceCarousel
        infinite
        autoPlay
        activeIndex={thumbIndex}
        autoWidth
        disableDotsControls
        disableButtonsControls
        items={thumbs}
        mouseTracking={true}
        onSlideChanged={syncThumbs}
        touchTracking={!mainAnimation}
      />
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="btn-prev" onClick={slidePrev}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/sf-black/64/long-arrow-left.png"
          alt="long-arrow-left"
        />
      </div>
      <div className="btn-next" onClick={slideNext}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/sf-black-filled/64/long-arrow-right.png"
          alt="long-arrow-right"
        />
      </div>
      </div>
    </div>,
  ];
};
