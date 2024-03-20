import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);

  return (
    <div>
      <h4 className="title">애플후레시</h4>
      {/* <p className="title-sub">by Moon</p> */}
    </div>
  );
}
