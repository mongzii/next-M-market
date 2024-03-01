import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handle(요청, 응답) {
  if (요청.method === "POST") {
    let hash = await bcrypt.hash(요청.body.password, 10);
    //console.log(hash);
    //console.log(요청.body);
    요청.body.password = hash;
    const client = await connectDB;
    const db = client.db("market");
    await db.collection("user_cred").insertOne(요청.body);
    응답.status(200).json("가입완료");
  }
}
//빈칸이면 안되는거 만들기
//중복된 이메일 체크 하는거 만들기
//admin 만들기
