//db에서 email, password 같은게 있는지 찾으면 된다.

// import { connectDB } from "@/util/database";
// import { ObjectId } from "mongodb";

// export default async function handle(요청, 응답) {
//   if (요청.method == "POST") {
//     //console.log(123);
//     //console.log(요청.body);
//     //응답.status(200).json({ name: "바보" });
//     // const client = await connectDB;
//     // const db = client.db("market");
//     // let dfdf = await db
//     //   .collection("user_cred")
//     //   .findOne({ _id: new ObjectId(요청.body) });
//     // console.log(dfdf);
//     const client = await connectDB;
//     const db = client.db("market");
//     let dfdf = await db.collection("user_cred").findOne({ email: "abc" });
//     console.log(dfdf);
//   }
// }

//수동적으로 찾는것까지는 성공. but 요청.body가 계속 비어있다 ㅠㅠ

// -------다시도전

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

export default async function handle(요청, 응답) {
  if (요청.method === "POST") {
    const client = await connectDB;
    const db = client.db("market");
    let 모든회원 = await db.collection("user_cred").find().toArray();
    let 맞는이메일 = 모든회원.filter(ele => ele.email === 요청.body.email);

    //console.log(맞는이메일[0].email);
    //console.log(요청.body.email);
    if (
      맞는이메일[0]?.email === 요청.body.email &&
      맞는이메일[0]?.password === 요청.body.pw
    ) {
      //return 응답.status(200).json(console.log(요청.body));
      //return console.log(요청.body);
      //return 응답.redirect(302, "/");

      //여기서 토큰도 발급해줘야한다.
      // let token1 = jwt.sign({ email: 요청.body.email }, secretObj.secret, {
      //   expiresIn: "2m",
      // });
      // let token2 = jwt.sign({ password: 요청.body.pw }, secretObj.secret, {
      //   expiresIn: "2m",
      // });
      // return 응답.send({ tokenone: token1, tokentwo: token2 });
      return 응답.status(200).json(요청.body);
      //return 응답.redirect(302, "/");
    } else {
      return 응답.status(500).json("틀림");
      return 응답.redirect(302, "/login");
    }
  }
}
