"use client";

import { productData } from "@/util/productData";
import { useDispatch, useSelector } from "react-redux";
import { increasement } from "@/redux/store";

export default function Item() {
  const Item = productData.cartItem;
  const dispatch = useDispatch();
  const state = useSelector(state => state.CartState);
  const increClick = (id, product, price, count) => {
    //console.log("+++");
    dispatch(
      increasement({
        id: 9,
        product: "발바리",
        price: "20000",
        count: "1",
      })
    );
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
    console.log("---");
  };

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
          </div>
        );
      })}
    </div>
  );
}
