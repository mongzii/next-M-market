//selector잘되는지 일단 email이라도 당겨와보는 테스트를 해보자

"use client";

import { useSelector } from "react-redux";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import LogoutBtn from "./LogoutBtn";

export default function HeaderLoginP() {
  const user2 = useSelector(state => state.loginState.user);
  // console.log(user2?.email);
  return (
    <div>
      {/* <h2>ㅌㅌ님</h2> */}
      {/* user2가 있으면 user2.email로 보이게 하고 , 없으면 안녕하세요만 보이게 삼항연산자하기 */}
      {user2 ? (
        <div>
          <h2>{user2.email}님</h2>
          <LogoutBtn />
        </div>
      ) : (
        <div>
          <LoginBtn />
          <SignupBtn />
        </div>
      )}
    </div>
  );
}

//여기로 로그인버튼을 가져와야할듯
