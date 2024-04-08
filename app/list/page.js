"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ListLeft from "../ListLeft";
import { productData } from "@/util/productData";

export default function List() {
  let router = useRouter();

  //let [수량, 수량변경] = useState([2, 2, 2, 2, 2, 2, 2, 1, 1]);

  return (
    <div>
      <h2 className="title">상품목록</h2>
      <div className="merchandise">
        <div className="list-left">
          <ListLeft />
        </div>
        <div className="list-right">
          <div className="goods">
            {productData.jacket.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/jacket${i + 1}.png`} className="food-img" />
                  <h4>{productData.jacket[i].product}</h4>
                  <h4>{productData.jacket[i].price}원</h4>
                  <button>장바구니</button>
                </div>
              );
            })}
            {productData.shoe.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
                  <h4>{productData.shoe[i].product}</h4>
                  <h4>{productData.shoe[i].price}원</h4>
                  <button>장바구니</button>
                </div>
              );
            })}
            {/* {상품.map((a, i) => {
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
            })} */}
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
