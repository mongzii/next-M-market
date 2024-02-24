import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    // console.log(요청.body); // 이렇게하면 유저가 보낸 데이터가 나올거다
    if (요청.body.title == "" || 요청.body.content == "") {
      return 응답.status(500).json("내용을 다시 확인하세요");
    } else {
      const client = await connectDB;
      const db = client.db("market");
      const data = await db.collection("post").insertOne(요청.body);
      //return 응답.status(200).json("저장완료");
      return 응답.redirect(302, "/board");
    }
  }
}
