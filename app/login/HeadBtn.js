"use client";

//로그인구현 테스트용으로 생각하자

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/store";

export default function HeadBtn() {
  const dispatch = useDispatch;

  const [info, setInfo] = useState("");
  const [email, setEmail] = useState("");

  // const user = useSelector(state => state.loginState);
  // console.log(user);

  function handle() {
    dispatch(setLogin(email));
    console.log(email);
  }
  // const user = useSelector(state => state.loginState);
  // console.log(user);
  // console.log(email);
  return (
    <div>
      head부분
      <input type="text" onChange={e => setEmail(e.target.value)} />
      <button onClick={handle}>눌러보자</button>
      {/* {console.log(email)} */}
      {/* {console.log(user)} */}
    </div>
  );
}

//이제 로그인된정보와 state가 연결이 되야한다.
//일단 이거랑 로그인된정보랑 연결해보자
