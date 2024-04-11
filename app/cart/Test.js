"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

export default function Test() {
  const state2 = useSelector(state => state.cartState.value);
  console.log(state2);
  // console.log(state2?.product);

  return (
    <div>
      {/* <h4>{product}</h4> */}
      {/* <h4>{state.product}</h4> */}
      <h2 className="title">Test Cart</h2>
      <div className="cart-item">
        <h4>{state2.product}</h4>
        <h4>{state2.price}</h4>
        <button>+</button>
        <h4>{state2.count}</h4>
        <button>-</button>
      </div>
    </div>
  );
}
