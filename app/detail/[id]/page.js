//게시판내용 제목누르면 뜨는 상세페이지

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("market");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  //console.log(result);
  //console.log(props.params.id);

  return (
    <div>
      <h4>상세페이지</h4>
      {/* <h4>글제목</h4>
      <p>글내용</p> */}
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()} />
    </div>
  );
}
