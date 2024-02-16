export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2 className="title">상품목록</h2>

      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/jacket${i + 1}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
          </div>
        );
      })}

      {/* <div className="food">
        <h4>{상품[0]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $40</h4>
      </div> */}
    </div>
  );
}
