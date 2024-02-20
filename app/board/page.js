//게시물리스트 나오는 페이지

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
//import { MongoClient } from "mongodb";

export default async function Qa() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);

  return (
    <div className="list-bg">
      <h2>Q & A</h2>
      {data.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/` + data[i]._id}>
              <h4>{data[i].title}</h4>
            </Link>
            <p>{data[i].content}</p>
            {/* <p>{data[i]._id}</p> */}
          </div>
        );
      })}
      {/* <DetailLink /> */}
    </div>
  );
}
