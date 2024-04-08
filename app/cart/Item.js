"use client";

// import { useSelector } from "react-redux";

export default function Item() {
  //   const dispatch = useDispatch();
  // const cart2 = useSelector(state => state);
  // const cart2 = useSelector(state => state.CartState);
  // console.log(cart2);

  return (
    <div>
      <h2 className="title">Cart</h2>
      <div className="cart-item">
        <p>ㅇㄹㅇㄹ</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}
