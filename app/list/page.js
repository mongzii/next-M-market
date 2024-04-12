"use client";

//import { useState } from "react";
import { useRouter } from "next/navigation";
import ListLeft from "../ListLeft";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/store";

export default function List() {
  let router = useRouter();
  const dispatch = useDispatch();
  //const value2 = useSelector(state => state.CartState);
  // console.log(value2);

  const handleClick = (id, product, count, price) => {
    dispatch(addcart({ id, product, count, price })); //여기에 id가 들어오면 이게 payload다. 여기서 넘겨주는것만 item에서 받을수있다
    //console.log(value2);
    // console.log({ i });
    //여기서 보낸 id랑 product가
    router.push("/cart");
  };
  //console.log(productData);
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
                  <button
                    onClick={() =>
                      handleClick(a.id, a.product, a.count, a.price)
                    }
                  >
                    장바구니
                  </button>
                </div>
              );
            })}
            {productData.shoe.map((a, i) => {
              return (
                <div className="food" key={i}>
                  <img src={`/shoe${i + 1}.png`} className="food-img" />
                  <h4>{productData.shoe[i].product}</h4>
                  <h4>{productData.shoe[i].price}원</h4>
                  <button
                    onClick={() =>
                      handleClick(a.id, a.product, a.count, a.price)
                    }
                  >
                    장바구니
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
