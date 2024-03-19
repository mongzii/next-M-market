import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handle(요청, 응답) {
  if (요청.method === "POST") {
    //빈칸인경우 안되는거 만들기
    if (
      요청.body.name === "" ||
      요청.body.email === "" ||
      요청.body.password === ""
    ) {
      return 응답.status(500).json("내용을 다 기입해주세요");
    }
    //console.log(요청.body);
    //빈칸아니면 중복된 이메일인지 체크하자
    //일단 db에서 email을 찾자
    const client2 = await connectDB;
    const db2 = client2.db("market");
    let emailsearch = await db2
      .collection("user_cred")
      .findOne({ email: 요청.body.email });
    //console.log(emailsearch); //이게 있으면 중복인거다.
    //저게 있으면 중복가입은 안됩니다라고 나오게
    if (!emailsearch) {
      //-------------해시함수하는거
      let hash = await bcrypt.hash(요청.body.password, 10);
      //console.log(hash);
      요청.body.password = hash;
      const client = await connectDB;
      const db = client.db("market");
      await db.collection("user_cred").insertOne(요청.body);
      응답.status(200).json("가입완료");
    } else {
      return 응답.status(500).json("중복가입은 안됩니다!!!");
    }
  }
}

//admin 만들기
