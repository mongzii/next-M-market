import { connectDB } from "@/util/database";
import Slide from "./Slide";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);

  return (
    <div>
      <h1 className="title">M-market</h1>
      <div className="main">
        {/* <div className="main-top">
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
        </div> */}
        <Slide />
        <div className="main-middle">
          <img src="/mainbt2.jpg" />
          <img src="/mainbt3.jpg" />

          <img src="/mainbt5.jpg" />
        </div>
        <div className="main-bottom">
          <img src="/mainbt4.jpg" />
        </div>
      </div>
    </div>
  );
}
