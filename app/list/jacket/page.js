"use client";

import ListLeft from "@/app/ListLeft";
import { productData } from "@/util/productData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { increasement } from "@/redux/store";
import Axios from "axios";

export default function JacketPage() {
  //let [수량, 수량변경] = useState([2, 2, 2, 2, 2, 2, 2, 1, 1]);
  const dispatch = useDispatch();
  let router = useRouter();
  // const handle = i => {
  //   console.log(i);
  // };
  const handle = () => {
    handleAxios();
  };
  const handleAxios = () => {
    // const product = { id, product, price, amount }; //이걸 서버에서 받아와야 해결이 되는거같다.
    // dispatch(increasement(product));
    // const body = { id, product, price, amount };
    // Axios.post("/api/cart", body).then(res => {
    //   console.log(res.data);
    // });
    // console.log("ddddd");
    Axios.post("/api/cart")
      .then(res => {
        console.log(res);
        router.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1 className="title">Jacket</h1>
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
                  {/* //여기서 장바구니를 클릭하면 이게 +로 해서 디스패치되야한다. */}
                  {/* <button
                    onClick={() => {
                      // dispatch(increasement(id, product, price, amount));
                      handle();
                      // router.push("/cart");
                    }}
                  > */}
                  {/* <button onClick={handle}>장바구니</button> */}
                  <button
                    onClick={i => {
                      dispatch(increasement(i));
                    }}
                  >
                    되자
                  </button>
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
