import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);

  return (
    <div>
      <h2 className="title">M-market</h2>
      <div className="main">
        <div className="main-top">
          <div className="slide-container">
            <div className="slide-box">
              <img src="/main1.png" />
            </div>

            <div className="slide-box">
              <img src="/main11.jpg" />
            </div>
            <div className="slide-box">
              <img src="/main12.jpg" />
            </div>
            <div className="slide-box">
              <img src="/main13.jpg" />
            </div>

            <div className="slide-box">
              <img src="/main14.jpg" />
            </div>
          </div>
        </div>
        <div className="main-middle">
          <img src="/main2.jpg" />
          <img src="/main3.jpg" />

          <img src="/main5.jpg" />
        </div>
        <div className="main-bottom">
          <img src="/main4.jpg" />
        </div>
      </div>
    </div>
  );
}
