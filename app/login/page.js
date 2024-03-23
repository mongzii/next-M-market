import Link from "next/link";
import GoogleLoginBtn from "../GoogleLoginBtn";
import EmailPart from "./EmailPart";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Login() {
  // const client = await connectDB;
  // const db = client.db("market");
  // let dfdf = await db.collection("user_cred").findOne({ email: "aaa" });
  // console.log(dfdf);
  return (
    <div>
      <h2>LOGIN</h2>

      <form method="POST" action="/api/auth/login">
        <EmailPart />
        <button type="submit">로그인</button>
      </form>

      <div className="loginPL">
        <GoogleLoginBtn />
        <Link href="/member">회원가입</Link>
      </div>
    </div>
  );
}

//로그인버튼을 눌렀을때 DB에 있는 email, password와 같은지 확인하고
//맞으면 home화면 뜨면서 로그인버튼이 로그아웃버튼으로 바껴야한다.
