import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  //console.log(session.user.email);
  if (요청.method == "POST") {
    if (요청.body.title == "" || 요청.body.content == "") {
      return 응답.status(500).json("내용을 다시 확인하세요");
    }
    if (session) {
      요청.body.author = session.user.email;
      const client = await connectDB;
      const db = client.db("market");
      const data = await db.collection("post").insertOne(요청.body);
      //return 응답.status(200).json("저장완료");
      return 응답.redirect(302, "/board");
    } else {
      // const client = await connectDB;
      // const db = client.db("market");
      // const data = await db.collection("post").insertOne(요청.body);
      // //return 응답.status(200).json("저장완료");
      // return 응답.redirect(302, "/board");
      return 응답.status(500).json("로그인 먼저 하세요");
    }
  }

  // if (요청.method == "POST") {
  //   // console.log(요청.body); // 이렇게하면 유저가 보낸 데이터가 나올거다
  //   if (요청.body.title == "" || 요청.body.content == "") {
  //     return 응답.status(500).json("내용을 다시 확인하세요");
  //   } else {
  //     const client = await connectDB;
  //     const db = client.db("market");
  //     const data = await db.collection("post").insertOne(요청.body);
  //     //return 응답.status(200).json("저장완료");
  //     return 응답.redirect(302, "/board");
  //   }
  // }
}
