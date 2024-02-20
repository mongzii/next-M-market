export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h2 className="title">Cart</h2>
      <CartItem 장바구니={장바구니[0]} />
      <CartItem 장바구니={장바구니[1]} />
    </div>
  );
}

function CartItem({ 장바구니 }) {
  return (
    <div className="cart-item">
      <p>{장바구니}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
