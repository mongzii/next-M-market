"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/store";

export default function Part() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  //const [info, setInfo] = useState("");
  const dispatch = useDispatch();

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePw = e => {
    setPw(e.target.value);
  };
  let router = useRouter();

  const handleLogin = () => {
    //setEmail(email);
    dispatch(setLogin(email, pw));
    LoginAxios();
    //console.log(email);
  };

  const user = useSelector(state => state.loginState);
  console.log(user);
  // const handleRedux = () => {
  //   dispatch(setLogin(info));
  // };

  const LoginAxios = () => {
    const body = { email, pw };
    axios
      .post("/api/auth/login", body)
      //.then(res => console.log(res.data))
      .then(res => {
        setEmail(res.data.email),
          setPw(res.data.pw),
          alert("로그인성공"),
          //dispatch(setLogin(email));
          router.push("/");
      })
      .catch(err => {
        alert("실패"), setEmail(""), setPw("");
      });
  };

  return (
    <div>
      <h4>Email</h4>
      <input value={email} onChange={handleEmail} />
      <h4>Password</h4>
      <input type="password" value={pw} onChange={handlePw} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

//email은 들어가는데 pw는 안들어감. 그거 해결해야함
//그후 헤더에 email이 보이게 해야함
