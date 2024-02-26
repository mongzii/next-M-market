//게시물리스트 나오는 페이지

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import WriteBtn from "./WriteBtn";
import BoardItem from "./BoardItem";
//import { MongoClient } from "mongodb";

export default async function Qa() {
  const client = await connectDB;
  const db = client.db("market");
  const data = await db.collection("post").find().toArray();
  //console.log(data);

  return (
    <div className="list-bg">
      <BoardItem data={data} />
      {/* <DetailLink /> */}
    </div>
  );
}
