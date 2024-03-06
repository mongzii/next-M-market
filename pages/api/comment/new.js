import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답) {
  //유저이메일받아와야해서 getServerSession이용해야함
  let session = await getServerSession(요청, 응답, authOptions);

  if (요청.method === "POST") {
    //console.log(요청.body);
    // console.log(session);
    요청.body = JSON.parse(요청.body);
    let 저장할데이터형태 = {
      content: 요청.body.comment,
      parent: new ObjectId(요청.body._id),
      author: session.user.email, // if문 써서 session 없으면 로그인후 이용하게 짜기
    };

    const client = await connectDB;
    const db = client.db("market");
    let result = await db.collection("comment").insertOne(저장할데이터형태);
    응답.status(200).json("저장완료");
  }
}
