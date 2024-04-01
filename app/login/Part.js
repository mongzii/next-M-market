"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Part() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePw = e => {
    setPw(e.target.value);
  };
  // let router = useRouter();

  const handleLogin = () => {
    LoginAxios();
  };
  const LoginAxios = () => {
    const body = { email, pw };
    axios
      .post("/api/auth/login", body)
      //.then(res => setEmail(res.data.email))
      //.then(res => console.log(res.data))
      .then(res => {
        setEmail(res.data.email), setPw(res.data.pw);
      })
      .catch(err => console.error(err));
  };

  if (email === "" || pw === "") {
    console.log("메롱");
  }

  return (
    <div>
      <h4>Email</h4>
      <input onChange={handleEmail} />
      <h4>Password</h4>
      <input onChange={handlePw} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}
