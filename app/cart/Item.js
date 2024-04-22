"use client";

import { countUp, countDown, deletecart } from "@/redux/store";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Item() {
  let router = useRouter();
  const Item = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  const handleUp = i => {
    dispatch(countUp(i));
  };
  const handleDown = i => {
    dispatch(countDown(i));
  };
  const handleDelete = i => {
    dispatch(deletecart(i));
  };

  return (
    <div>
      <h2 className="title-cart">장바구니</h2>
      {Item.map((a, i) => {
        return (
          <div className="cart-item" key={i}>
            {/* <p>{a.id}</p> */}
            <div className="item1">
              <p>{a.product}</p>
            </div>
            <div className="item2">
              <p>{a.price}원</p>
            </div>
            <div className="item3">
              <button onClick={() => handleUp(i)}>+</button>
              <p>{a.count}</p>
              <button onClick={() => handleDown(i)}>-</button>
            </div>
            <div className="item4">
              <button onClick={() => handleDelete(i)}>삭제</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
