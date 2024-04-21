"use client";

import { useState } from "react";

export default function Slide() {
  const images = [
    "/main1.png",
    "/main2.jpg",
    "/main3.jpg",
    "/main4.jpg",
    "/main5.jpg",
  ];
  const [index, setIndex] = useState(0);

  const moveNext = () => {
    setIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const movePrev = () => {
    setIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="main-top">
        <div className="slide-container">
          {images.map((image, i) => (
            <div
              className="slide-box"
              key={i}
              style={{ transform: `translateX(-${index * 700}px)` }}
            >
              <img src={image} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={movePrev}>pre</button>
      <button onClick={moveNext}>next</button>
    </div>
  );
}
