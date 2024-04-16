"use client";
//자체 로그인부분

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/store";

export default function Part() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [accessToken, setAccessToken] = useState("hahaha");
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
    //dispatch(setLogin({ email, pw })); //디스패치가 입력된 액션값을 가지고 온다.
    LoginAxios();
    // console.log(email, pw);
  };
  // const user2 = useSelector(state => state.loginState.user);
  // console.log(user2?.email);

  const LoginAxios = () => {
    const body = { email, pw, accessToken };
    //기본값으로 설정한 accessToken이 body에 담겨서 일단 잘 넘어가기는 한다.
    //이제 저걸 암호화해서 넘겨줘야하는거같은데....
    axios
      .post("/api/auth/login", body)
      //.then(res => console.log(res.data))
      .then(res => {
        setEmail(res.data.email), setPw(res.data.pw), console.log(res);
        alert("로그인성공"), dispatch(setLogin({ email, pw })); //디스패치가 입력된 액션값을 가지고 온다. 이걸 원하는 곳에 가서 selectorr로 쓰면된다
        localStorage.setItem("accessToken", res.data.accessToken);
        // localStorage.setItem("refreshToken", res.data.refreshToken);
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
