import Link from "next/link";

import GoogleLoginBtn from "../GoogleLoginBtn";

export default function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      <h4>Email</h4>
      <input type="text"></input>
      <h4>Password</h4>
      <input type="password"></input>
      <button>로그인</button>
      <div className="loginPL">
        <GoogleLoginBtn />
        <Link href="/member">회원가입</Link>
      </div>
    </div>
  );
}
