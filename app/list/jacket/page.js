"use client";

import ListLeft from "@/app/ListLeft";
import { useState } from "react";

export default function JacketPage() {
  let 상품 = [
    "Tomatoes",
    "Pasta",
    "Coconut",
    "Tomatoes",
    "Pasta",
    "Coconut",
    "Tomatoes",
    "Pasta",
    "Coconut",
  ];
  let [수량, 수량변경] = useState([2, 2, 2, 2, 2, 2, 2, 1, 1]);

  return (
    <div>
      <h1 className="title">Jacket</h1>
      <div className="merchandise">
        <div className="list-left">
          <ListLeft />
        </div>
        <div className="list-right">
          <div className="goods">
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

            {/* {상품.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
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
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
