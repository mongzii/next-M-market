"use client";

import { useState } from "react";

export default function EmailPart() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePw = e => {
    setPw(e.target.value);
  };
  //   const handleBtn = ()=> {

  //   }
  return (
    <div>
      <h4>Email</h4>
      <input value={email} onChange={handleEmail}></input>
      <h4>Password</h4>
      <input type="password" value={pw} onChange={handlePw}></input>
    </div>
  );
}
