//cart기능 이걸로 만드는중

"use client";

import { countUp, countDown } from "@/redux/store";
//import { productData } from "@/util/productData";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Test() {
  //const Item = productData.cartItem;
  //console.log(Item);
  let router = useRouter();
  const Item = useSelector(state => state.cartState);
  //console.log(state2);
  //console.log(Item);
  const dispatch = useDispatch();
  // console.log(state2?.product);
  // const handleDelete = product => {
  //   //console.log(product);
  //   //순회해서 product명이 같으면 Item에서 삭제해라
  //   //필터로 하는 방법은 없나
  //   //product명이 같으면 Item에서 삭제해라
  //   // if (product === Item.product) {
  //   //   console.log(product);
  //   // } else {
  //   //   console.log("뭬야");
  //   // }
  // };
  // const handleUp = (id, product, price, count) => {
  //   //console.log(id, product, count);
  //   //console.log(product); //클릭한 상품의 상품명 나온다
  //   dispatch(countUp({ id, product, price, count }));
  //   //이제 이게 Item에 적용이 되어서 그게 밑의 표에 나타나게되면 되는데....
  //   console.log(Item);
  //   //router.push("/cart");
  // };

  // const handleDown = (id, product, price, count) => {
  //   //down기능 구현할차례임
  //   dispatch(countDown({ id, product, price, count }));
  //   //console.log(Item);
  //   //console.log("--");
  // };
  // useEffect(() => {
  //   handleUp();
  //   handleDown();
  // }, [Item]);
  const handleUp = i => {
    dispatch(countUp(i));
  };
  return (
    <div>
      {/* <h4>{product}</h4> */}
      {/* <h4>{state.product}</h4> */}
      <h2 className="title">Test Cart</h2>

      {Item.map((a, i) => {
        return (
          <div className="cart-item" key={i}>
            <p>{a.id}</p>
            <p>{a.product}</p>
            <p>{a.price}</p>

            <button onClick={() => handleUp(i)}>+</button>
            <p>{a.count}</p>
            {/* <button
              onClick={() => handleDown(a.id, a.product, a.price, a.count)}
            >
              -
            </button>
            <button onClick={() => handleDelete(a.product)}>삭제</button> */}
            {/* <h4>{state2.product}</h4>
            <h4>{state2.price}</h4>
            <button>+</button>
            <h4>{state2.count}</h4>
            <button>-</button> <button>삭제</button>*/}
          </div>
        );
      })}
    </div>
  );
}
