"use client";

import { productData } from "@/util/productData";
import { useDispatch, useSelector } from "react-redux";
import { addcart, decreasement } from "@/redux/store";
import { Children, useState } from "react";

//list page에서 보낸 id와 product를 받아오자

export default function Item() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");

  const Item = productData.cartItem;
  const dispatch = useDispatch();
  const state2 = useSelector(state => state.CartState);

  const increClick = (id, product, price, count) => {
    //console.log("+++");
    //결국 여기서 클릭한 id의 값이 저 객체안에 들어가게 해야한다.
    //console.log(id);
    // console.log(props);
    // dispatch(
    //   increasement({
    //     id: id,
    //     product: product,
    //     price: price,
    //     count: count,
    //     //여기있는 payload로 일단 정보는 들어옴 , 이 값에 따라 조절이된다.
    //     //이게 여기 들어오는 정보만 클릭한거로 따라가게 하면 된다.
    //   })
    // );
    // dispatch(
    //   increasement({
    //     id: state.value.id,
    //     product: state.value.product,
    //     price: state.value.price,
    //     count: state.value.count,
    //   })
    // );
  };
  const decreClick = () => {
    // console.log("---");
    dispatch(
      decreasement({
        id: 3,
        product: "나이키핫해",
        count: 5,
      })
    );
  };
  // const handle = (id, product, price, count) => {
  //   setProduct
  // };

  return (
    <div>
      <h2 className="title">Cart</h2>

      {Item.map((a, i) => {
        return (
          <div className="cart-item" key={i}>
            <p>{a.product}</p>
            <p>{a.price}</p>
            <button onClick={increClick}>+</button>
            {/* <p>{state.value.amount}</p> */}
            <button onClick={decreClick}>-</button>
            {/* <p>{state}</p> */}
            <button onClick={handle}>제발</button>
          </div>
        );
      })}
    </div>
  );
}
