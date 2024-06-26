import Link from "next/link";
import GoogleLoginBtn from "../GoogleLoginBtn";
import Part from "./Part";

export default async function Login() {
  return (
    <div>
      <h2>LOGIN</h2>

      {/* <form method="POST" action="/api/auth/login">
      </form> */}
      <Part />
      <div className="loginPL">
        <GoogleLoginBtn />
        <Link href="/member">회원가입</Link>
      </div>
    </div>
  );
}

//로그인버튼을 눌렀을때 DB에 있는 email, password와 같은지 확인하고
//맞으면 home화면 뜨면서 로그인버튼이 로그아웃버튼으로 바껴야한다.
