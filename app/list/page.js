"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([1, 2, 3]);

  return (
    <div>
      <h2 className="title">상품목록</h2>

      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/jacket${i + 1}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
            <button
              onClick={() => {
                let minuscopy = [...수량];
                minuscopy[i]--;
                수량변경(minuscopy);
              }}
            >
              -
            </button>
            <span> {수량[i]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]++;
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
