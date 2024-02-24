import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    //console.log(요청.body);
    //DB에 있는 데이터를 수정하라.
    const client = await connectDB;
    const db = client.db("market");
    let result = await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(요청.body._id) },
        { $set: { title: 요청.body.title, content: 요청.body.content } }
      );
    응답.redirect(302, "/board");
  }
}
