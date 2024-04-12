"use client";

import ListLeft from "@/app/ListLeft";
import { productData } from "@/util/productData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addcart } from "@/redux/store";

export default function JacketPage() {
  const dispatch = useDispatch();
  let router = useRouter();
  const handleClick = (id, product, count, price) => {
    dispatch(addcart({ id, product, count, price }));
    router.push("/cart");
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
