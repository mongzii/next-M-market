"use client";

import ListLeft from "@/app/ListLeft";
import { productData } from "@/util/productData";
import { useState } from "react";

export default function ShoePage() {
  //let [수량, 수량변경] = useState([2, 2, 2, 2, 2, 2, 2, 1, 1]);

  return (
    <div>
      <h1 className="title">Shoe</h1>
      <div className="merchandise">
        <div className="list-left">
          <ListLeft />
        </div>
        <div className="list-right">
          <div className="goods">
            {productData.shoe.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
                  <h4>{productData.shoe[i].product}</h4>
                  <h4>{productData.shoe[i].price}원</h4>
                  <button>장바구니</button>
                  {/* <button
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
                  </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
