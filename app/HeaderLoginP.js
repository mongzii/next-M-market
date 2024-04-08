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
