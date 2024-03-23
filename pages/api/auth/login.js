//db에서 email, password 같은게 있는지 찾으면 된다.

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handle(요청, 응답) {
  if (요청.method == "POST") {
    //console.log(123);
    //console.log(요청.body);
    //응답.status(200).json({ name: "바보" });
    // const client = await connectDB;
    // const db = client.db("market");
    // let dfdf = await db
    //   .collection("user_cred")
    //   .findOne({ _id: new ObjectId(요청.body) });
    // console.log(dfdf);
    const client = await connectDB;
    const db = client.db("market");
    let dfdf = await db.collection("user_cred").findOne({ email: "abc" });
    console.log(dfdf);
  }
}

//수동적으로 찾는것까지는 성공. but 요청.body가 계속 비어있다 ㅠㅠ
