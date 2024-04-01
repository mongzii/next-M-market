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

export default async function handle(요청, 응답) {
  if (요청.method === "POST") {
    //console.log("빙고");
    //console.log(요청.body); //여기에 입력한 내용이 들어온다.
    //그럼 입력된 정보가 내가 가지고 있는거랑 비교해보면 된다.
    //비교해보고 email이랑 pw가 같으면 홈화면으로 넘어가기
    // const client = await connectDB;
    // const db = client.db("market");
    // let 모든회원 = await db.collection("user_cred").find().toArray();
    // const 맞는이메일 = 모든회원.filter(ele => ele.email === 요청.body.email);
    // // console.log(맞는이메일); // 이거 비번이랑 요청바디의 비번이랑 같으면 홈화면으로 넘어가게 하자
    // if (맞는이메일.password === 요청.body.pw) {
    //   // const client = await connectDB;
    //   // const db = client.db("market");
    //   // let 모든회원 = await db.collection("user_cred").find().toArray();
    //   // const 맞는이메일 = 모든회원.filter(ele => ele.email === 요청.body.email);
    //   console.log(맞는이메일);
    //   // return 응답.redirect(302, "/");
    // } else {
    //   return 응답.status(500).json("내용을 다시 확인해라");
    // }
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
      return 응답.status(200).json(요청.body);
      return 응답.redirect(302, "/");
    } else {
      return console.log("틀림");
    }
  }
}
